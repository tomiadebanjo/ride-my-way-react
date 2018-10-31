import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import RidesView from '../../../src/pages/RidesView';

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;

const initialState = {
	authentication: {
		isAuthenticated: false
	},
	ride: {
		fetchRides: {
			loading: false,
			rides: [
				{
					departure_time: 'time',
					departure_date: 'date',
					pickup_location: 'location',
          destination: 'destination',
          id: 1
				}
			]
		}
	}
};

describe('ride view page test', () => {
	beforeEach(() => {
		store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<BrowserRouter>
					<RidesView />
				</BrowserRouter>
			</Provider>
		);
	});

  it('should render the ride view page  correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
