const express = require('express');
const router = express.Router();
const { getUserSkills } = require('../controllers/skillController');
const { protect } = require('../middleware/authMiddleware');

// Protected route for fetching user skills
router.get('/', protect, getUserSkills);

module.exports = router;
