import React from 'react';
import GoalList from './GoalList';
import Progress from './Progress';


// ? do api call here and prop drill vs api call in components where data is needed


const Profile = () => {
    return(
        <div>
            <h2>Profile</h2>
            <Progress />
            <GoalList />
        </div>
    );
};

export default Profile;