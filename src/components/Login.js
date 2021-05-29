// need to add validation

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const initialState = {
    username: '',
    password: '',
};


// will need axios.post to verify user

const Login = () => {
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
        setFormLogin(initialState);
        push('/profile');
    }

    return(
        <div>
            <h2>Goal Tracker</h2>
            <h3>Sign-In</h3>
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