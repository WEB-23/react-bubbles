import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const Login = (props) => {
	const [ credentials, setCredentials ] = useState({
		username: '',
		password: ''
	});

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	// make a post request to retrieve a token from the api
	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('http://localhost:5000/api/login', credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				// when you have handled the token, navigate to the BubblePage route
				props.history.push('bubbles');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="login">
			<form onSubmit={handleSubmit}>
				<input type="text" name="username" onChange={handleChange} placeholder="Username" />

				<input type="password" name="password" onChange={handleChange} placeholder="Password" />

				<button type="submit">Log in</button>
			</form>
		</div>
	);
};

export default Login;
