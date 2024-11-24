const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    status: { type: String, enum: ['Applied', 'Interviewing', 'Accepted', 'Rejected'], default: 'Applied' },
    deadline: { type: Date },
    requiredSkills: [String],
});

module.exports = mongoose.model('Application', ApplicationSchema);
