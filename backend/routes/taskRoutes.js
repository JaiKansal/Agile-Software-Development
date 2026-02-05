const express = require('express');
const router = express.Router();
const {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// We need the 'protect' middleware because ALL task routes are private
const { protect } = require('../middleware/authmiddleware');

// Chain routes to keep code clean
router.route('/').get(protect, getTasks).post(protect, setTask);
router.route('/:id').delete(protect, deleteTask).put(protect, updateTask);

module.exports = router;