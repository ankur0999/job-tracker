import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('http://localhost:5000/api/applications', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setApplications(data);
        };
        fetchApplications();
    }, []);

    return (
        <div>
            <h2>Your Applications</h2>
            <ul>
                {applications.map((app) => (
                    <li key={app._id}>
                        <strong>{app.companyName}</strong> - {app.jobTitle} (Deadline: {new Date(app.deadline).toDateString()})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationList;
