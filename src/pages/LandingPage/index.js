import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import InfoSection from '../../components/InfoSection';
import Footer from '../../components/Footer';
import classes from './style.scss';

const LandingPage = () => (
	<div className={classes.container}>
		<Header />
		<Hero />
		<InfoSection />
		<Footer />
	</div>
);

export default LandingPage;
