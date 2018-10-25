import axios from 'axios';
import constants from '../constants';

const { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } = constants;


export const registerRequest = user => ({
  type: REGISTER_REQUEST,
	user
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
	user
});

export const registerFail = error => ({
  type: REGISTER_FAIL,
	error
});

export const register = (user, history) => (dispatch) => {
  dispatch(registerRequest(user))
  const { firstName, lastName , email, password } = user
  const userData = { fullName: `${firstName} ${lastName}`, email, password };
  return axios.post(`/auth/signup`, userData)
    .then(response => {
      console.log(response);
      dispatch(registerSuccess('user'))
      localStorage.setItem('user', 'boy')
      history.push('/');
    })
    .catch(err => {
      console.log(err)
      dispatch(registerFail(err));
    })
}
