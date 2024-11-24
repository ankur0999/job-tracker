import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to Job Tracker</h1>
            <nav>
                <Link to="/applications">Manage Applications</Link>
                <Link to="/skills">Skill Gap Analysis</Link>
                <Link to="/progress">View Progress</Link>
            </nav>
        </div>
    );
};

export default Dashboard;
