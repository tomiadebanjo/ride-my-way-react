import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import classes from './style.scss';

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Profile />
      <Footer />
    </div>
  )
};

export default Dashboard;