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

    const handleSave = () => {
        axiosWithAuth()
            .post(`https://goalsetting.herokuapp.com/api/goals/new/${userId}`, goal)
            .then(res => {
                setGoal(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        setGoal(initialGoals);
        push('/profile');
    };

    return(
        <div>
            <h2>Add Goal</h2>
            <input
                type='text'
                name='title'
                value={goal.title}
                onChange={handleChange}
            />
            <button onClick={handleSave}>Add</button>
        </div>
    );
};

export default AddGoal;