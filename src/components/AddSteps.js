import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddSteps = () => {
    const { goal_id } = useParams();

    const initialStep = {
        goal_id: goal_id,
        step_number: '',
        step_text: '',
    }

    const [ step, setSteps ] = useState(initialStep);

    let steps = [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSteps({...step, [name]: value});
    }

    const handleSave = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post(`https://goalsetting.herokuapp.com/api/goals/add-step/${goal_id}`, step)
            .then(res => {
                steps.push(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    console.log('steps', steps);

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
            <button onClick={handleSave}>Add steps</button>
            {}
        </div>
    )
}

export default AddSteps;