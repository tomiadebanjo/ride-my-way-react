import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './style.scss';
import { userLogout } from '../../util/helpers/userLogout';

const Header = props => (
	<header className={classes.header}>
		<a href="/" className={classes.brand}>
			Ride My Way
		</a>
		<nav>
			{!props.isAuthenticated ? (
				<ul className={classes.menu}>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/signup">Sign-Up</Link>
					</li>
				</ul>
			) : (
				<ul className={classes.menu}>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/" onClick={userLogout}>Logout</Link>
					</li>
				</ul>
			)}
		</nav>
	</header>
);

const mapStateToProps = state => ({
	isAuthenticated: state.authentication.isAuthenticated
});

export default connect(mapStateToProps)(Header);
