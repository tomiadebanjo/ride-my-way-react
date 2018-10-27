import constants from '../constants';

const {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL, LOGOUT,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} = constants

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isAuthenticated: true, user } : {}

const authentication = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_REQUEST:
			return {
				registering: true
			};
		case REGISTER_SUCCESS:
			return {
				isAuthenticated: true
			}
		case REGISTER_FAIL:
			return {}
		case LOGIN_REQUEST:
			return {
				...state,
				isAuthenticated: true,
        user: action.user
      }
		case LOGIN_SUCCESS:
			return {
				...state,
        loggedIn: true,
        user: action.user
      }
		case LOGIN_FAIL:
			return {}
		case LOGOUT:
			return {}
		default:
			return state;
	}
};

export default authentication;
