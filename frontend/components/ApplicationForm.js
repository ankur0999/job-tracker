import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [requiredSkills, setRequiredSkills] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                'http://localhost:5000/api/applications',
                {
                    companyName,
                    jobTitle,
                    deadline,
                    requiredSkills: requiredSkills.split(','),
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            alert('Application added successfully!');
        } catch (error) {
            alert('Error adding application: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Application</h2>
            <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            <input type="text" placeholder="Required Skills (comma-separated)" value={requiredSkills} onChange={(e) => setRequiredSkills(e.target.value)} />
            <button type="submit">Add Application</button>
        </form>
    );
};

export default ApplicationForm;
