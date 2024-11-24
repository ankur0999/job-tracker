import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import ApplicationList from '../components/ApplicationList';

const Applications = () => {
    return (
        <div>
            <h1>Manage Your Applications</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                {/* Form to Add New Applications */}
                <div style={{ flex: 1 }}>
                    <ApplicationForm />
                </div>
                {/* List of Existing Applications */}
                <div style={{ flex: 2 }}>
                    <ApplicationList />
                </div>
            </div>
        </div>
    );
};

export default Applications;
