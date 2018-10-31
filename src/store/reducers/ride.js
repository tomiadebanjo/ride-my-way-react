import constants from '../constants';
const {
  FETCH_RIDE_REQUEST,
  FETCH_RIDE_SUCCESS,
	FETCH_RIDE_FAIL,
	CREATE_RIDE_REQUEST,
	CREATE_RIDE_SUCCESS,
	CREATE_RIDE_FAIL,
	GET_SINGLE_RIDE,
	GET_SINGLE_RIDE_START
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
	},
	singleRide: {}
};

const rides = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_RIDE_REQUEST:
			return {
				...state,
				fetchRides: {
					...state.fetchRides,
					loading: true
				}
			};
    case FETCH_RIDE_SUCCESS:
			return {
				...state,
				fetchRides: {
					...state.fetchRides,
					rides: action.rides,
					loading: false
				}
			};
		case FETCH_RIDE_FAIL:
			return {
				...state,
				fetchRides: {
					...state.createRides,
					loading: false,
					error: action.error,
					rides: []
				}
			};
		case CREATE_RIDE_REQUEST:
			return {
				...state,
				createRide: {
					...state.createRide,
					loading: true
				}
			};
    case CREATE_RIDE_SUCCESS:
			return {
				...state,
				createRide: {
					...state.createRide,
					rides: action.rides,
					loading: false
				}
			};
		case CREATE_RIDE_FAIL:
			return {
				...state,
				createRide: {
					...state.createRide,
					loading: false,
					error: action.error
				}
			};
		case GET_SINGLE_RIDE:
			return {
				...state,
				singleRide: {
					...state.singleRide,
					ride: action.ride
				}
			};
		case GET_SINGLE_RIDE_START:
			return {
				...state,
				singleRide: {}
			};
		default:
			return state;
	}
};

export default rides;
