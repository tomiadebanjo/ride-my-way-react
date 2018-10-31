import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Signup from '../../../src/pages/Signup';

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;

const initialState = {
  authentication: {
    isAuthenticated: false
  }
};

describe('signup page test', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render the signup page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
