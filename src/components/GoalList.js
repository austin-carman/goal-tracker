import React, { useState } from 'react';
import Goal from './Goal';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const GoalList = () => {
    const [ existingGoals, setExistingGoals ] = useState([])
    const userId = localStorage.getItem('userId')

    axiosWithAuth()
        .get(`https://goalsetting.herokuapp.com/api/goals/${userId}`)
        .then(res => {
            setExistingGoals(res.data)
        })
        .catch(err => {
            console.log(err);
        })

    return(
        <div>
            <h2>My Goals</h2>
            {
                existingGoals.map(goal => { // is this right ???
                    return <Goal key={goal.goal_id} goal={goal} /> // don't forget to add key
                })
            }
        </div>
    );
};

export default GoalList;