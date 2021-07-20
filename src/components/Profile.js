import React from 'react';
import GoalList from './GoalList';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const { push } = useHistory();
    const user = localStorage.getItem('user');

    const handleAddGoal = () => {
        push('/add-goal');
    }

    return(
        <div>
            <h2>Welcome Back {user}!</h2>
            <button onClick={handleAddGoal}>New Goal</button>
            <GoalList />
        </div>
    );
};

export default Profile;