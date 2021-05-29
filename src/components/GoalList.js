// needs state for all existing goals

import React from 'react';
import Goal from './Goal';
import { useHistory } from 'react-router-dom';




const GoalList = () => {
    const { push } = useHistory();
    
    // will need axios.get to fetch user's goals and render goal cards
    
    const handleAddGoal = () => {
        push('/add-goal');
    }

    return(
        <div>
            <h2>GoalList</h2>
            <button onClick={handleAddGoal}>Add Goal</button>
            <Goal />
        </div>
    );
};

export default GoalList;