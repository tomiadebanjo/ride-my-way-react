import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { createRide } from '../../store/actions/ride';
import { formatDate } from '../../util/helpers/format';
import classes from './style.scss';

class createRideModal extends React.Component {
	state = {
		ride: {
			pickUpLocation: '',
			destination: '',
			departureDate: '',
			departureTime: ''
		}
	};

	handleChange = e => {
		const { name, value } = e.target;
		const { ride } = this.state;
		this.setState({
			ride: {
				...ride,
				[name]: value
			}
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { ride } = this.state;
		const rideData = { ...ride, departureDate: formatDate(ride.departureDate) };
		console.log(rideData);
		this.props.createRideNow(rideData);
	};

	handleClose = (e) => {
		this.props.handleClose();
		this.setState({
			ride: {
				pickUpLocation: '',
				destination: '',
				departureDate: '',
				departureTime: ''
			}
		})
	}

	render() {
		const { ride: { pickUpLocation, destination, departureDate, departureTime } } = this.state;

		return (
			<Modal
				show={this.props.show}
				handleClose={this.handleClose}
			>
				<div className={classes.create_ride_modal}>
					<h2>Create Ride</h2>
					<form onSubmit={this.handleSubmit}>
						<div className={classes.form_control}>
							<label htmlFor="pickUpLocation">Take-off location</label>
							<input
								type="text"
								name="pickUpLocation"
								id="pickUpLocation"
								value={pickUpLocation}
								onChange={this.handleChange}
								placeholder="take-off location"
								required
							/>
						</div>
						<div className={classes.form_control}>
							<label htmlFor="destination">Destination</label>
							<input
								type="text"
								name="destination"
								id="destination"
								value={destination}
								onChange={this.handleChange}
								placeholder="destination"
								required
							/>
						</div>
						<div className={classes.form_control}>
							<label htmlFor="departureDate">Date</label>
							<input
								type="date"
								name="departureDate"
								id="departureDate"
								value={departureDate}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className={classes.form_control}>
							<label htmlFor="departureTime">Time</label>
							<input
								type="time"
								name="departureTime"
								id="departureTime"
								value={departureTime}
								onChange={this.handleChange}
								required
							/>
						</div>
						<button>Submit</button>
					</form>
				</div>
			</Modal>
		);
	}
}

const mapStateToProps = state => ({
	loading: state.ride.createRide.loading,
	error: state.ride.createRide.error
});

const mapDispatchToProps = dispatch => ({
	createRideNow: (ride) => dispatch(createRide(ride))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(createRideModal);
