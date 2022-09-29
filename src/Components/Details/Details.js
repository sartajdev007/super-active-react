import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css'
import userImg from '../../images/user.png'

const Details = ({ details }) => {
    const [timeBreak, setTimeBreak] = useState(0);

    const notify = () => toast('Activity Completed');

    let totalTime = 0;
    for (const time of details) {
        totalTime = parseInt(totalTime + parseInt(time.time));
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
                <button onClick={() => setTimeBreak(1)} className='minutes'>
                    1m
                </button>
                <button onClick={() => setTimeBreak(2)} className='minutes'>
                    2m
                </button>
                <button onClick={() => setTimeBreak(5)} className='minutes'>
                    5m
                </button>
                <button onClick={() => setTimeBreak(10)} className='minutes'>
                    10m
                </button>
            </div>
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <h4>Exercise Time: {totalTime} mins</h4>
                <h4>Break Time: {timeBreak} mins</h4>
                <button onClick={notify} className='complete-btn'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Details;