import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddSteps = () => {
    const { goal_id } = useParams();

    const initialStep = {
        goal_id: goal_id,
        step_number: '',
        step_text: '',
    }

    const [ step, setStep ] = useState(initialStep);
    const [steps, setSteps] = useState([])

    const { push } = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStep({...step, [name]: value});
    }

    const handleAddStep = async () => {
        try {
            const response = await axiosWithAuth()
                .post(`https://goalsetting.herokuapp.com/api/goals/add-step/${goal_id}`, step)
            const newStep = response.data;
            newStep.status && console.log(newStep);
            newStep.step_id && setSteps([...steps, newStep])
        } catch(err) {
            console.log(err);
        }
    }

    const handleDone = () => {
        push('/profile');
    }
    
    console.log(steps);
    return(
        <div>
            <h2>Steps</h2>
            <input
                type='text'
                name='step_number'
                value={step.step_number}
                onChange={handleChange}
            />
            <input
                type='text'
                name='step_text'
                value={step.step_text}
                onChange={handleChange}
            />
            <button onClick={handleAddStep}>Add step</button>
            {
                steps.map(item => {
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