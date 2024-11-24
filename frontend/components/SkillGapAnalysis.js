import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SkillGapAnalysis = () => {
    const [applications, setApplications] = useState([]);
    const [userSkills, setUserSkills] = useState([]);
    const [skillGaps, setSkillGaps] = useState({});

     // Same as before...
     const skillRecommendations = {
        JavaScript: 'Learn JavaScript at https://javascript.info/',
        React: 'Learn React at https://reactjs.org/docs/getting-started.html',
        Nodejs: 'Learn Node.js at https://nodejs.dev/',
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                // Fetch all job applications
                const { data: applicationData } = await axios.get('http://localhost:5000/api/applications', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                // Fetch user skills
                const { data: skillData } = await axios.get('http://localhost:5000/api/skills', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setApplications(applicationData);
                setUserSkills(skillData);

                // Analyze skill gaps
                const gaps = {};
                applicationData.forEach((app) => {
                    const missingSkills = app.requiredSkills.filter((skill) => !skillData.includes(skill));
                    gaps[app._id] = missingSkills;
                });
                setSkillGaps(gaps);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Skill Gap Analysis</h2>
            <ul>
                {applications.map((app) => (
                    <li key={app._id}>
                        <h3>
                            {app.companyName} - {app.jobTitle}
                        </h3>
                        <p>
                            <strong>Missing Skills:</strong>{' '}
                            {skillGaps[app._id] && skillGaps[app._id].length > 0
                                ? skillGaps[app._id].join(', ')
                                : 'No missing skills'}
                        </p>
                        <ul>
                            {skillGaps[app._id]?.map((skill) => (
                                <li key={skill}>
                                    {skill}: {skillRecommendations[skill] || 'No suggestions available'}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillGapAnalysis;
