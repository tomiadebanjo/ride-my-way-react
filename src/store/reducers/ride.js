import constants from '../constants';
const {
  FETCH_RIDE_REQUEST,
  FETCH_RIDE_SUCCESS,
	FETCH_RIDE_FAIL,
	CREATE_RIDE_REQUEST,
	CREATE_RIDE_SUCCESS,
	CREATE_RIDE_FAIL
} = constants;

const initialState = {
	fetchRides: {
		rides: [],
		loading: false,
		error: ''
	},
	createRide: {
		loading: false,
		error: ''
	}
};

const rides = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_RIDE_REQUEST:
			return {
				fetchRides: {
					...state.fetchRides,
					loading: true
				}
			};
    case FETCH_RIDE_SUCCESS:
			return {
				fetchRides: {
					...state.fetchRides,
					rides: action.rides,
					loading: false
				}
			};
		case FETCH_RIDE_FAIL:
			return {
				fetchRides: {
					...state.createRides,
					loading: false,
					error: action.error,
					rides: []
				}
			};
		case CREATE_RIDE_REQUEST:
			return {
				createRide: {
					...state.createRide,
					loading: true
				}
			};
    case CREATE_RIDE_SUCCESS:
			return {
				createRide: {
					...state.createRide,
					rides: action.rides,
					loading: false
				}
			};
		case CREATE_RIDE_FAIL:
			return {
				createRide: {
					...state.createRide,
					loading: false,
					error: action.error,
				}
			};
		default:
			return state;
	}
};

export default rides;
