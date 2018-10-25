import axios from 'axios';
import constants from '../constants';
import { userLogout}  from '../../util/helpers/userLogout';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } = constants;

export const loginRequest = (user) => ({
  type: LOGIN_REQUEST,
  user
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  error
});

export const login = (email, password, history) => (dispatch) => {
  dispatch(loginRequest({ email }))
  return axios.post(`/auth/login`, {
    email,
    password
  })
  .then(response => {
    console.log(response);
    dispatch(loginSuccess('user'))
    localStorage.setItem('user', 'girly');
    history.push('/');
  })
  .catch(err => {
    console.log(err)
    dispatch(loginFail(err));
  })
}

export const logout = () => (dispatch) => {
  userLogout();
  return {
    TYPE: LOGOUT,
  }
}
