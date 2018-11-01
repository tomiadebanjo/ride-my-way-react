import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../../src/store/actions/userAuthentication';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const url = '/auth/login';

const initialState = {}

const mockData = {
  data: {
    user: {
      email: 'tomiadebanjo@gmail.com',
    }
  },
  error: {
    response: {
      data: {
        error: 'Request failed with status code 404'
      },
      message: {
        error: 'Request failed with status code 404'
      }
    }
  }
};

const email = 'tomiadebanjo@gmail.com';
const password = 'password';

const history = {
  push: jest.fn()
}

describe('register user', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch LOGIN_SUCCESS after succesfully creating account', (done) => {
    moxios.stubRequest(url, { status: 201, response: mockData.data.user });

    const { data: { user } } = mockData;
    const expectedActions = [
      {
        type: 'LOGIN_REQUEST',
        user
      },
      {
        type: 'LOGIN_SUCCESS',
        user
      },
    ];

    const store = mockStore(initialState);
    store.dispatch(actions.login(email, password, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  })

  it('should dispatch LOGIN_FAIL after succesfully creating account', (done) => {
    moxios.stubRequest(url, { status: 404, response: mockData.error.response.data.error });

    const { data: { user } } = mockData;
    const { error: { response } } = mockData;
    const expectedActions = [
      {
        type: 'LOGIN_REQUEST',
        user
      },
      {
        type: 'LOGIN_FAIL',
        error: response.data.error
      },
    ];

    const store = mockStore(initialState);
    store.dispatch(actions.login(email, password, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  })
})
