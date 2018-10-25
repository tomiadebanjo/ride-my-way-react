import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignupForm from '../../components/SignupForm';
import classes from './style.scss';

const Signup = () => {
  return (
    <div className={classes.container}>
      <Header />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default Signup;
