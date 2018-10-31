import axios from 'axios';
import constants from '../constants';
import setAxiosHeader from '../../util/helpers/setAxiosHeader';
import { storeData } from '../../util/helpers/localStorage';
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
    const { data } = response;
    dispatch(loginSuccess('user'))
    storeData(data);
    setAxiosHeader(data.token);
    history.push('/');
    toastr.success(data.message);
  })
  .catch(error => {
    dispatch(loginFail(error));
    toastr.error(error.response.data.message);
  })
}

export const logout = () => (dispatch) => {
  userLogout();
  return {
    TYPE: LOGOUT,
  }
}
