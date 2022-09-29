import React from 'react';
import './Details.css'
import userImg from '../../images/user.png'

const Details = () => {
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
                <input type="text" placeholder='exercise-time' className='ex-time' />
                <input type="text" placeholder='break-time' className='br-time' />
            </div>
        </div>
    );
};

export default Details;