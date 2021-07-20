import React from 'react';
import { useHistory , useParams, Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Goal = (props) => {
    const { goal_id, goal_title, percentage_completed } = props.goal;

    return(
        <div>
            <h2>{goal_title}</h2>
            {
                percentage_completed ? <h3>{percentage_completed}</h3> : <h3>0%</h3>
            }
            <Link to={`/details/${goal_id}`}>
                <input type='button' value='View Details/Edit' />
            </Link>
            <button>Delete Goal</button>
            <p>Likes:</p>
            <p>Comments:</p>
        </div>
    );
};

export default Goal;