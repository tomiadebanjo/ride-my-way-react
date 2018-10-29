import axios from 'axios';
import constants from '../constants';

const { FETCH_RIDE_REQUEST, FETCH_RIDE_SUCCESS, FETCH_RIDE_FAIL } = constants;

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

export const fetchRide = () => dispatch => {
  dispatch(fetchRideStart());
  axios.get(`/rides`)
    .then(response => {
      const { data: { rides } } = response;
      console.log(rides);
      dispatch(fetchRideSuccess(rides))
    })
    .catch(err => {
      console.log(error)
      dispatch(fetchRideFail())
    })
};
