const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser); // Register a new user
router.post('/login', loginUser); // User login
router.put('/skills', protect, updateUserSkills);

module.exports = router;
