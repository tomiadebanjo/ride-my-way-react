import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import classes from './style.scss';

const Login = () => {
	return (
		<div className={classes.container}>
			<Header />
			<LoginForm />
			<Footer />
		</div>
		)
};

export default Login;
