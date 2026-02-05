const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler'); // Simple error handling
const User = require('../models/user');

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body; // 1. Destructure data from the request

  // 2. Validation: Check if all fields exist
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // 3. Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // 4. Hash password (encrypt it)
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 5. Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // 6. Send response back to frontend
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // We will write this function below
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('No account found with this email. Please register to get started.');
  }

  if (!(await bcrypt.compare(password, user.password))) {
    res.status(400);
    throw new Error('Invalid password. Please try again.');
  }

  res.json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    // We will fill this in later when we add middleware
    res.status(200).json(req.user)
})

// Generate JWT (The ID Card)
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};