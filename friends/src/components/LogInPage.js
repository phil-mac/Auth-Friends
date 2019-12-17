import React, {useState} from 'react';
import {axiosWithAuth} from '../axiosAuth';
import axios from 'axios';

export default (props) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const login = e => {
        console.log('login clicked');
        axios
        .post('http://localhost:5000/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
        .then(res => {
            console.log('got back login res: ');
            console.log(res);

            localStorage.setItem('token', res.data.payload);
            console.log('stored token: ' + res.data.payload)
            props.history.push('/dashboard')
        })
        .catch(error => {
            console.log(error);
        })

        e.preventDefault();

    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={login}>
                <input 
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder='Username'
                />
                <input 
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}