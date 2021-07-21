import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

const Goal = (props) => {
    const { goal_id, goal_title, percentage_completed } = props.goal;

    const handleDelete = (e) => {
        axiosWithAuth()
            .delete(`https://goalsetting.herokuapp.com/api/goals/delete/${goal_id}`)
            .then(res => {
                console.log('delete', res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <h2>{goal_title}</h2>
            {
                percentage_completed ? <h3>{percentage_completed}</h3> : <h3>0%</h3>
            }
            <Link to={`/details/${goal_id}`}>
                <input type='button' value='View Details/Edit'/>
            </Link>
            <button onClick={handleDelete}>Delete Goal</button>
            <p>Likes:</p>
            <p>Comments:</p>
        </div>
    );
};

export default Goal;