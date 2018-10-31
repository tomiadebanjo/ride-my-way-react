import axios from 'axios';
import constants from '../constants';
import setAxiosHeader from '../../util/helpers/setAxiosHeader';
import { storeData } from '../../util/helpers/localStorage';

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
  return axios.post(`/auth/signup`, user)
    .then(response => {
      const { data } = response;
      dispatch(registerSuccess(user))
      storeData(data);
      setAxiosHeader(data.token);
      history.push('/');
      toastr.success(data.message);
    })
    .catch(error => {
      console.log(error.response.data);
      dispatch(registerFail(error.response.data));
      toastr.error(error.response.data.message);
    })
}
