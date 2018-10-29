import React from 'react';
import placeholder from '../../assets/images/placeholder.png';
import classes from './style.scss';

const Profile = () => {
	const name = 'Adebanjo Tomi';
	const email = 'tomiadebanjo@gmail.com';
	const location = 'Lagos, Nigeria';
	return <div className={classes.container}>
			<div className={classes.row}>
				<div className={classes.img_row}>
					<img src={placeholder} alt="placeholder" />
				</div>
				<div className={classes.user_info}>
					<p>Name: {name}</p>
					<p>Email: {email}</p>
					<p>Location: {location}</p>
				</div>
				<div className={classes.ride_count}>
					<div className={classes.count_row}>
            <p className={classes.margin_O}>Rides taken</p>
            <span className={`${classes.count}  ${classes.margin_O}`}>0</span>
					</div>
          <div className={classes.count_row}>
						<p className={classes.margin_O}>Rides given</p>
            <span className={`${classes.count}  ${classes.margin_O}`}>0</span>
					</div>
				</div>
			</div>

			<div className={classes.button_row}>
				<div className={classes.button}>
					<a href="/">Create a ride</a>
				</div>
      <div className={classes.button}>
					<a href="/">View available rides</a>
				</div>
      <div className={classes.button}>
					<a href="/">View ride requests</a>
				</div>
			</div>

      <div className={classes.history}>
      <h3 className={classes.margin_O}>Ride History</h3>
        <div className={classes.table_container}>
          <table className={classes.table}>
            <tbody>
              <tr>
                <th>Take-off location</th>
                <th>Destination</th>
                <th>Departure time</th>
                <th>Departure date</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
		</div>;
};

export default Profile;
