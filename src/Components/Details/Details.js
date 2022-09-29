import React from 'react';
import './Details.css'
import userImg from '../../images/user.png'

const Details = ({ details }) => {
    let totalTime = 0;
    for (const time of details) {
        totalTime = totalTime + time.time;
    }

    return (
        <div>
            <div className='user'>
                <img src={userImg} alt="" />
                <div>
                    <h3>Sartaj Akik</h3>
                    <p><small>California,US</small></p>
                </div>
            </div>
            <div className="user-details">
                <div>
                    <h3>80kg</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.8</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>22</h3>
                    <p>Age</p>
                </div>
            </div>
            <div className='time'>
                <button className='minutes'>
                    1m
                </button>
                <button className='minutes'>
                    2m
                </button>
                <button className='minutes'>
                    5m
                </button>
                <button className='minutes'>
                    10m
                </button>
            </div>
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <h3>Exercise Time: {totalTime}</h3>
                <h3>Break Time:</h3>
            </div>
        </div>
    );
};

export default Details;