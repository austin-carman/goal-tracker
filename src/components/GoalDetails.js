import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const GoalDetails = () => {
    const [ goal, setGoal ] = useState({});

    const { goal_id } = useParams();

    useEffect(() => {
        axiosWithAuth()
            .get(`https://goalsetting.herokuapp.com/api/goals/details/${goal_id}`)
            .then(res => {
                setGoal(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [goal_id])

    console.log(goal.steps);

    return(
        <div>
            <h2>{goal.goal_title}</h2>
            <h2>{goal.percentage_completed}</h2>
            {/* {
                goal.steps.map(step => {
                    return(
                        <div>
                            <h2>Steps</h2>
                            <p>{step.step_number}</p>
                            <p>{step.step_text}</p>
                            <p>{step.completed}</p>
                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default GoalDetails;