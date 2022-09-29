import React, { useEffect, useState } from 'react';
import './Body.css'
import logoImage from '../../images/bodybuilder.png'

const Body = () => {
    const [activities, setActivity] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])


    return (
        <div className='body-container'>
            <div className='activity-container'>
                <div className="header">
                    <img src={logoImage} alt="" />
                    <h1 className='title-text'>Superstar Lifestyle</h1>
                </div>
                <h4>Select today's exercise</h4>
                <div className='cards-container'>
                    {
                        activities.map(activity => console.log(activity))
                    }
                </div>
            </div>
            <div className='details-container'>
                <h1>My Details :</h1>
            </div>
        </div>
    );
};

export default Body;