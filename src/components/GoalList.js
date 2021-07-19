// needs state for all existing goals

import React from 'react';
import Goal from './Goal';
import axios from 'axios';

const GoalList = () => {
    
    return(
        <div>
            <h2>My Goals</h2>
            <Goal />
        </div>
    );
};

export default GoalList;