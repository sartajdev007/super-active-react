import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { name, img, description, time, age } = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-details'>
                <h3 className='activity-name'>{name}</h3>
                <p>{description}</p>
                <h5>For age:{age} years</h5>
                <h5>Time: {time}</h5>
            </div>
        </div>
    );
};

export default Activity;