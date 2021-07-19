// needs state for all existing goals

import React, { useState } from 'react';
import Goal from './Goal';
import axios from 'axios';

const GoalList = () => {
    const [ existingGoals, setExistingGoals ] = useState([])

    axios.get('URL/api/goals') // fix URL
        .then(response => {
            setExistingGoals(response.data) // fix to be correct
        })
        .catch(err => {
            console.log(err);
        })


    return(
        <div>
            <h2>My Goals</h2>
            {
                existingGoals.map(goal => { // is this right ???
                    return <Goal goal={goal} /> // don't forget to add key
                })
            }
        </div>
    );
};

export default GoalList;