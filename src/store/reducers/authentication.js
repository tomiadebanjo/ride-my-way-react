import constants from '../constants';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } = constants

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {}

const authentication = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
        loggingIn: true,
        user: action.user
      }
		case LOGIN_SUCCESS:
			return {
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
