const express = require('express')
const Router = express.Router()

const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const { protect} = require('../middleware/authmiddleware');

console.log('registerUser:', registerUser);
console.log('loginUser:', loginUser);
console.log('getMe:', getMe);   // <--- Is this undefined?
console.log('protect:', protect); // <--- Is this undefined?

Router.post('/', registerUser);       // Register (POST /api/users)
Router.post('/login', loginUser);     // Login (POST /api/users/login)
Router.get('/me', protect, getMe);             // Get User Info (GET /api/users/me)

module.exports = Router