import React, { useState } from 'react';
import Select from 'react-select';

const skillOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Python', label: 'Python' },
];

const EditSkillsWithSuggestions = () => {
    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const skills = selectedSkills.map((skill) => skill.value); // Extract values
            await axios.put(
                'http://localhost:5000/api/users/skills',
                { skills },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Skills updated successfully');
        } catch (error) {
            console.error('Error updating skills:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Select
                isMulti
                options={skillOptions}
                value={selectedSkills}
                onChange={setSelectedSkills}
                placeholder="Select or search for skills"
            />
            <button type="submit">Update Skills</button>
        </form>
    );
};

export default EditSkillsWithSuggestions;
