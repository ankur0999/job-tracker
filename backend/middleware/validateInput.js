const validateApplicationInput = (req, res, next) => {
    const { companyName, jobTitle } = req.body;

    if (!companyName || !jobTitle) {
        res.status(400);
        throw new Error('Please provide company name and job title');
    }

    next();
};

module.exports = { validateApplicationInput };
