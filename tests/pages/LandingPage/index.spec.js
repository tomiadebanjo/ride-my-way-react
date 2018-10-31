import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import LandingPage from '../../../src/pages/LandingPage';

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;

const initialState = {
  authentication: {
    isAuthenticated: false
  }
};

describe('landing page test', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </Provider>
    )
  })

  it('should render the landing page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})