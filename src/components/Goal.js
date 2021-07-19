import React from 'react';
import axios from 'axios';

const Goal = (props) => {
    const { goal } = props;

    return(
        <div>
            <h2>{goal.title}</h2>
            <p>other goal details here</p> {/* add more goal details to be displayed */}
            {/* button/onclick for view all details */}
        </div>
    );
};

export default Goal;