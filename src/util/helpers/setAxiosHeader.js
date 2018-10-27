import axios from 'axios';
/**
 * @description - set token to request headers
 * @param {string} token - user token
 * @returns {void} no return or void
 */
const setAuthorizationToken = token => {
	if (token) {
		axios.defaults.headers.common.Authorization = token;
	} else {
		delete axios.defaults.headers.common.Authorization;
	}
};
export default setAuthorizationToken;
