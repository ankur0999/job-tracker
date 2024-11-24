const Application = require('../models/Application');

// Create a new application
const createApplication = async (req, res) => {
    try {
        const { user, companyName, jobTitle, deadline, requiredSkills } = req.body;

        const application = new Application({
            user,
            companyName,
            jobTitle,
            deadline,
            requiredSkills,
        });

        await application.save();
        res.status(201).json({ success: true, data: application });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get applications for a user
const getApplications = async (req, res) => {
    try {
        const { userId } = req.params;
        const applications = await Application.find({ user: userId });
        res.status(200).json({ success: true, data: applications });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createApplication, getApplications };
