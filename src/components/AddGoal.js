import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialGoals = {
    title: ''
}

const AddGoal = () => {
    const [ goal, setGoal ] = useState(initialGoals);
    const { push } = useHistory();
    const userId = localStorage.getItem('userId')
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGoal({...goal, [name]:value});
    };

    const handleSave = async () => {
        try {
            const response = await axiosWithAuth()
                .post(`https://goalsetting.herokuapp.com/api/goals/new/${userId}`, goal)
            setGoal(response.data)
            push(`/add-step/${response.data.goal_id}`);
            return response.data;
        } catch(err) {
            console.log(err);
        }
    };

    return(
        <div>
            <h2>New Goal</h2>
            <input
                type='text'
                name='title'
                value={goal.title}
                onChange={handleChange}
            />
            <button onClick={handleSave}>Add steps</button>
        </div>
    );
};

export default AddGoal;