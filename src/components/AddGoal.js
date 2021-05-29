import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialGoals = {
    goal: '',
}

const AddGoal = () => {
    const { push } = useHistory();
    const [ goals, setGoals ] = useState(initialGoals);
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGoals({...goals, [name]:value});
    };
    
    const handleSave = () => {
        // will need axios.post to create new goal for user
        setGoals(initialGoals);
        push('/profile');
    };

    return(
        <div>
            <h2>Add Goal</h2>
            <input
                type='text'
                name='goal'
                value={goals.goal}
                onChange={handleChange}
            />
            <button onClick={handleSave}>Add</button>
        </div>
    );
};

export default AddGoal;