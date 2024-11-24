const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { validateApplicationInput } = require('../middleware/validateInput');
const { createApplication, getApplications } = require('../controllers/applicationController');
const router = express.Router();

router.post('/', validateApplicationInput, protect, createApplication); // Create a new application
router.get('/:userId', protect, getApplications); // Get applications for a user

module.exports = router;
