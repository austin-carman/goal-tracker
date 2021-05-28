import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { push } = useHistory();

    const handleLogin = () => {
        push('/profile');
    }

    return(
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Sign In</button>
        </div>
    )
}

export default Login;