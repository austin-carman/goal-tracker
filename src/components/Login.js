import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// need to add validation
// will need axios.post to verify user

const Login = () => {
    const initialState = {
        username: '',
        password: '',
    };
    const { push } = useHistory();
    const [formLogin, setFormLogin] = useState(initialState);


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
                console.log('res', res);
            })
            .catch(err => {
                console.log(err);
            })
        setFormLogin(initialState);
        push('/profile');
    }

    return(
        <div>
            <h2>Sign-In</h2>
                <input 
                    type='text'
                    name='username'
                    value={formLogin.username}
                    onChange={handleChange}
                    placeholder='username'
                />

                <input
                    type='text'
                    name='password'
                    value={formLogin.password}
                    onChange={handleChange}
                    placeholder='password'
                />
            <button onClick={handleSubmit}>Sign-In</button>
        </div>
    )
}

export default Login;