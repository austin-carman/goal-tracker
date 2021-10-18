import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddSteps = () => {
    const { goal_id } = useParams();

    const initialStep = {
        goal_id: goal_id,
        step_number: 1,
        step_text: '',
    }

    const [step, setStep] = useState(initialStep);
    const [existingSteps, setExistingSteps] = useState([])

    const { push } = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStep({...step, [name]: value});
    }
    
    const handleAddStep = async () => {
        setStep({...step, step_number: step.step_number + 1})
        try {
            const response = await axiosWithAuth()
                .post(`https://goalsetting.herokuapp.com/api/goals/add-step/${goal_id}`, step)
            const newStep = response.data;
            console.log('newStep', newStep);
            newStep.status && console.log(newStep);
            newStep.step_id && setExistingSteps([...existingSteps, newStep])
        } catch(err) {
            console.log(err);
        }
    }

    const handleDone = () => {
        push('/profile');
    }
    
    return(
        <div>
            <h2>Steps</h2>
            <input
                type='text'
                name='step_text'
                value={step.step_text}
                onChange={handleChange}
            />
            <button onClick={handleAddStep}>Add step</button>
            {
                existingSteps.map(item => {
                    return(
                        <div>
                            <p>{item.step_number}. {item.step_text}</p>
                        </div>
                    )
                })
            }
            <button onClick={handleDone}>Done</button>
        </div>
    )
}

export default AddSteps;