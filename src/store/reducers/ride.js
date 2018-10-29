import constants from '../constants';
const {
  FETCH_RIDE_REQUEST,
  FETCH_RIDE_SUCCESS,
  FETCH_RIDE_FAIL
} = constants;

const initialState = {
	rides: [],
	loading: false,
};

const rides = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_RIDE_REQUEST:
			return {
				...state,
				loading: true
			};
    case FETCH_RIDE_SUCCESS:
			return {
				...state,
				rides: action.rides,
				loading: false
			};
		case FETCH_RIDE_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
				articles: []
			};
		default:
			return state;
	}
};

export default rides;
