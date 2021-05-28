import React from 'react';
import { useHistory } from 'react-router-dom';
import GoalList from './GoalList';
import Progress from './Progress';

const Profile = () => {
    const { push } = useHistory();

    const handleAddGoal = () => {
        push('/add-goal');
    }

    return(
        <div>
            <h2>Profile</h2>
            <button onClick={handleAddGoal}>Add Goal</button>
            <Progress />
            <GoalList />
        </div>
    );
};

export default Profile;