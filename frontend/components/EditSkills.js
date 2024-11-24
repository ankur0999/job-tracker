import React, { useState, useEffect } from 'react';
import axios from 'axios';




const EditSkills = () => {
    const [skills, setSkills] = useState('');

    useEffect(() => {
        const fetchSkills = async () => {
            const token = localStorage.getItem('token');
            try {
                const { data } = await axios.get('http://localhost:5000/api/skills', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSkills(data.join(', ')); // Convert array to comma-separated string
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        fetchSkills();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.put(
                'http://localhost:5000/api/users/skills',
                { skills: skills.split(',').map((skill) => skill.trim()) },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Skills updated successfully');
        } catch (error) {
            console.error('Error updating skills:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Enter skills, separated by commas (e.g., JavaScript, React)"
            />
            <button type="submit">Update Skills</button>
        </form>
    );
};

export default EditSkills;
