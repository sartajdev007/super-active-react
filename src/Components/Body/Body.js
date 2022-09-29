import React, { useEffect, useState } from 'react';
import './Body.css'
import logoImage from '../../images/bodybuilder.png'
import Activity from '../Activity/Activity';
import Details from '../Details/Details';

const Body = () => {
    const [activities, setActivity] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])

    const handleExerciseDetails = (activity) => {
        const newActivity = [...details, activity]
        setDetails(newActivity);
    }

    return (
        <div className='body-container'>
            <div className='activity-container'>
                <div className="header">
                    <img src={logoImage} alt="" />
                    <h1 className='title-text'>Superstar Lifestyle</h1>
                </div>
                <h2>Select today's exercise</h2>
                <div className='cards-container'>
                    {
                        activities.map(activity => <Activity
                            activity={activity}
                            key={activity.id}
                            handleExerciseDetails={handleExerciseDetails}
                        >
                        </Activity>)
                    }
                </div>
            </div>
            <div className='details-container'>
                <Details details={details}></Details>
            </div>
        </div >
    );
};

export default Body;