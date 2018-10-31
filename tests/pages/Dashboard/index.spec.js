import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Dashboard from '../../../src/pages/Dashboard';

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;

const initialState = {
	authentication: {
		isAuthenticated: false
  },
  ride: {
    createRide: {
      loading: false
    }
  }
};

const data = {
  fullName: 'Tom',
  email: 'email'
}

describe('dashboard test', () => {
	beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(data));
		store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<BrowserRouter>
					<Dashboard
          fullName='Tom'
          />
				</BrowserRouter>
			</Provider>
		);
	});

	it('should render the landing page correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
