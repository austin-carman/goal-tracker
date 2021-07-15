import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const initialState = {
        username: '',
        password: '',
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
        axios.post('https://goalsetting.herokuapp.com/', formRegister)
            .then(res => {
                console.log('res', res);
            })
            .catch(err => {
                console.log(err);
            })
        setFormRegister(initialState);
        push('/login');
    }

    return(
        <div>
            <h2>Create Your Account</h2>
                <input 
                    type='text'
                    name='username'
                    value={formRegister.username}
                    onChange={handleChange}
                    placeholder='username'
                />

                <input
                    type='text'
                    name='password'
                    value={formRegister.password}
                    onChange={handleChange}
                    placeholder='password'
                />
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Register;