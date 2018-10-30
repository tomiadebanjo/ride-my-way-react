import axios from 'axios';
import constants from '../constants';

const {
	FETCH_RIDE_REQUEST,
	FETCH_RIDE_SUCCESS,
	FETCH_RIDE_FAIL,
	CREATE_RIDE_REQUEST,
	CREATE_RIDE_SUCCESS,
	CREATE_RIDE_FAIL
} = constants;

export const fetchRideStart = () => ({
  type: FETCH_RIDE_REQUEST
});

export const fetchRideSuccess = (rides) => ({
  type: FETCH_RIDE_SUCCESS,
  rides
});

export const fetchRideFail = error => ({
  type: FETCH_RIDE_FAIL,
  error
});

export const createRideStart = () => ({
  type: CREATE_RIDE_REQUEST
});

export const createRideSuccess = () => ({
  type: CREATE_RIDE_SUCCESS,
});

export const createRideFail = error => ({
  type: CREATE_RIDE_FAIL,
  error
});

export const fetchRide = () => dispatch => {
  dispatch(fetchRideStart());
  return axios.get('/rides')
    .then(response => {
      const { data: { rides } } = response;
      console.log(rides);
      dispatch(fetchRideSuccess(rides))
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchRideFail())
    })
};

export const createRide = (ride) => dispatch => {
  dispatch(createRideStart());
  console.log(ride);
  return axios.post('users/rides', ride)
    .then(response => {
      toastr.success(response.data.message);
    })
    .catch(error => {
      toastr.error(error.response.data.message);
    })
}
