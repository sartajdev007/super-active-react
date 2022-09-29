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
            <div className='blog-container'>
                <div>
                    <h2>Q:1-How does react work?</h2>
                    <p>
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                        A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.
                    </p>
                </div>
                <div>
                    <h2>Q:2-What are the difference between props and state?</h2>
                    <p>
                        <strong>State</strong>:The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
                    </p>
                    <p>
                        <strong>Props</strong>:Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                    </p>
                </div>
                <div>
                    <h2>Q:3-The use of 'useEffect'</h2>
                    <p>
                        Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Body;