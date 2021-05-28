import React from 'react';
import { useHistory } from 'react-router-dom';

const AddGoal = () => {
    const { push } = useHistory();

    const handleSave = () => {
        push('/profile');
    };

    return(
        <div>
            <h2>Add Goal</h2>
            <button onClick={handleSave}>Add</button>
        </div>
    );
};

export default AddGoal;