import { combineReducers } from 'redux';
import authentication from './authentication';
import ride from './ride';

const rootReducer = combineReducers({
	authentication,
	ride
});

export default rootReducer;
