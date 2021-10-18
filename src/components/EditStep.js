// import React, { useEffect, useState } from 'react';
// import { useParams, useHistory } from 'react-router';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import EditGoal from './EditGoal';

// const EditStep = (props) => {
//     const { goal, setGoal, setToggleEdit } = props;
//     // const initialStep = {
//     //     goal_id: goal.goal_id,
//     //     step_number: 1,
//     //     step_text: '',
//     // }
//     // const [steps, setSteps] = useState(initialStep);

//     const { goal_id } = useParams();
//     const { push } = useHistory();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setGoal({...goal, [name]: value})
//     }

//     const handleSave = async () => {
//         const updatedGoalTitle = await axiosWithAuth()
//             .put(`https://goalsetting.herokuapp.com/api/goals/edit/goal/${goal_id}`)
//         setGoal(updatedGoalTitle)
//         // const updatedStep = await axiosWithAuth()
//         //     .put(`https://goalsetting.herokuapp.com/api/goals/edit/step/${step_id}`) // params??
//         // // setSteps()
//         setToggleEdit(false)
//     }
//     return(
//         {
//             goal.steps.map(step => {
//                 return(
//                     <label>
//                         {step.step_number}
//                         <input
//                             type='text'
//                             name='step_text'
//                             value={goal.goal_title}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     // <p>{step.step_number}. {step.step_text}</p>
//                 ) 
//             })
//         }
//     )
// }

// export default EditStep;