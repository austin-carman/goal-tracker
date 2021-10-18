import React, { useState, useEffect } from 'react';
import Goal from './Goal';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const GoalList = () => {
    const [ goals, setGoals ] = useState([])
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        axiosWithAuth()
            .get(`https://goalsetting.herokuapp.com/api/goals/${userId}`)
            .then(res => {
                setGoals(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [goals]);

    return(
        <div>
            {
                goals.length > 0 &&
                    goals.map(goal => {
                        return <Goal key={goal.goal_id} goal={goal} />
                    })
            }
        </div>
    );
};

export default GoalList;