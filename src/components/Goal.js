import React from 'react';
import { useHistory , useParams } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Goal = (props) => {
    const { goal } = props;

    // const { push } = useHistory();
    // const { id } = useParams();

    // const handleClick = (e) => {
    //     push('/details')
    // }

    return(
        <div>
            <h2>{goal.goal_title}</h2>
            {
                goal.percentage_completed ? <h3>{goal.percentage_completed}</h3> : <h3>0%</h3>
            }
            <button onClick={handleClick}>View details/edit</button>
            <button>Delete Goal</button>
            <p>Likes:</p>
            <p>Comments:</p>
        </div>
    );
};

export default Goal;