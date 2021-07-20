// do I need this file? Yes?

import axios, { useState } from 'axios';
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const GoalDetails = () => {
    const [ goal, setGoal ] = useState();

    axiosWithAuth()
        .get('https://goalsetting.herokuapp.com//details/:goal_id')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    
}

export default GoalDetails;