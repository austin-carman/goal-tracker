import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialGoals = {
    title: '',
    // add more (steps, etc)????
}

const AddGoal = () => {
    const { push } = useHistory();
    const [ goal, setGoal ] = useState(initialGoals);
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGoal({...goal, [name]:value});
    };
    
    const handleSave = () => {
        axios.post('URL/endpoint', ) // use correct endpoint for adding goal/steps
            .then()
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