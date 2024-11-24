import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        skills: '', // Skills entered as a comma-separated string
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, skills } = formData;

        try {
            // Send the form data to the backend
            await axios.post('http://localhost:5000/api/users/register', {
                name,
                email,
                password,
                skills: skills.split(',').map((skill) => skill.trim()), // Convert to array
            });
            alert('Registration successful');
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="skills"
                placeholder="Skills (comma-separated, e.g., React,Node.js)"
                value={formData.skills}
                onChange={handleChange}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
