import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { name, img, description, time, age } = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-details'>
                <h3 className='activity-name'>{name}</h3>
                <p>{description ? description.slice(0, 100) + "..." : description}</p>
                <h4>For age:{age} years</h4>
                <h4>Time: {time}</h4>
            </div>
            <button className='activity-btn'>
                Add to list
            </button>
        </div>
    );
};

export default Activity;