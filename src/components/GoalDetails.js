import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import EditGoal from './EditGoal';

const GoalDetails = () => {
    const [goal, setGoal] = useState({});
    const [toggleEdit, setToggleEdit] = useState(false);
    const [completed, setCompleted] = useState(false);

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
    }, [])

    const handleEditGoal = () => {
        setToggleEdit(true);
    }

    return(
        <div>
            {
                toggleEdit ? <EditGoal goal={goal} setGoal={setGoal} setToggleEdit={setToggleEdit} />
                :
                <div>
                    <h2>{goal.goal_title}</h2>
                    <button onClick={handleEditGoal}>Edit Goal</button>
                    <h2>{goal.percentage_completed}</h2>
                    <h4>Steps</h4>
                    {   
                        goal.steps && goal.steps.map(step => {
                            return(
                                <div key={step.step_id}>
                                    <p>{step.completed}</p>
                                    <p>Completed: {completed}</p>
                                    <p>{step.step_number}. {step.step_text}</p>
                                    {/* <button onClick={handleEditStep}>Edit Step</button> */}
                                </div>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}

export default GoalDetails;