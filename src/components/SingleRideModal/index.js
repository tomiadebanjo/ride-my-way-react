import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import classes from './style.scss';

const SingleRideModal = (props) => {
		const formatTime = time => time.slice(0, 5);
		const formatDate = date => new Date(date)
			.toLocaleDateString()
			.replace(/[/]/g, '-');

		let detail = <div className={classes.loader}></div>

		if (props.ride && props.ride.ride){
			const { departure_date, departure_time, destination, pickup_location, fullname } = props.ride.ride;
			detail = <div>
				<table className={classes.table}>
					<tbody>
						<tr>
							<th>Driver name</th>
							<td>{fullname}</td>
						</tr>
						<tr>
							<th>Take-off Location</th>
							<td>{pickup_location}</td>
						</tr>
						<tr>
							<th>Destination</th>
							<td>{destination}</td>
						</tr>
						<tr>
							<th>Departure Date</th>
							<td>{formatDate(departure_date)}</td>
						</tr>
						<tr>
							<th>Departure Time</th>
							<td>{formatTime(departure_time)}</td>
						</tr>
					</tbody>
				</table>
				<button disabled>REQUEST TO JOIN RIDE</button>
			</div>;
		}

		return(
			<Modal show={props.show} handleClose={props.handleClose}>
				<div className={classes.single_ride_modal}>
					<h2>Ride Details</h2>
					{detail}
				</div>
			</Modal>);
};


export default SingleRideModal;
