import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const initialState = {
        user_username: '',
        user_password: '',
    };
    const { push } = useHistory();
    const [formRegister, setFormRegister] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormRegister({
            ...formRegister,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post('https://goalsetting.herokuapp.com/api/auth/register', formRegister)
            .then(res => {
                push('/login');
            })
            .catch(err => {
                console.log(err);
            })
        setFormRegister(initialState);
    }

    return(
        <div>
            <h2>Start Achieving Your Goals Today!</h2>
            <h3>Create Your Account</h3>
            <div>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
            </div>
            <input 
                type='text'
                name='user_username'
                value={formRegister.user_username}
                onChange={handleChange}
                placeholder='username'
            />
            <input
                type='text'
                name='user_password'
                value={formRegister.user_password}
                onChange={handleChange}
                placeholder='password'
            />
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Register;