const getUserSkills = async (req, res) => {
    try {
        // Example: Assume skills are stored in the user profile
        const user = req.user; // User is retrieved via middleware
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user's skills
        res.json(user.skills || []); // Assume `skills` is an array in the user model
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skills', error: error.message });
    }
};

module.exports = { getUserSkills };
