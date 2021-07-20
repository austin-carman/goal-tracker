import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// need to add validation

const Login = () => {
    const initialState = {
        user_username: '',
        user_password: '',
    };
    
    const [formLogin, setFormLogin] = useState(initialState);
    
    const { push } = useHistory();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://goalsetting.herokuapp.com/api/auth/login', formLogin)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', res.data.username)
                localStorage.setItem('userId', res.data.userId)
                push('/profile');
            })
            .catch(err => {
                console.log(err);
            })
        setFormLogin(initialState);
    }

    return(
        <div>
            <h2>Sign-In</h2>
                <input 
                    type='text'
                    name='user_username'
                    value={formLogin.user_username}
                    onChange={handleChange}
                    placeholder='username'
                />

                <input
                    type='text'
                    name='user_password'
                    value={formLogin.user_password}
                    onChange={handleChange}
                    placeholder='password'
                />
            <button onClick={handleSubmit}>Sign-In</button>
        </div>
    )
}

export default Login;