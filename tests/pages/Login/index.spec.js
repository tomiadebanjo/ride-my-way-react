import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Login from '../../../src/pages/Login';

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;

const initialState = {
	authentication: {
		isAuthenticated: false
	}
};

describe('login page test', () => {
	beforeEach(() => {
		store = mockStore(initialState);
		wrapper = mount(
			<Provider store={store}>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</Provider>
		);
	});

	it('should render the login page correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
