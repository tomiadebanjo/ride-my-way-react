import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../../src/store/actions/register';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const url = '/auth/signup';

const initialState = {}

const mockData = {
	data: {
		user: {
			email: 'tomiadebanjo@gmail.com',
			fullName: 'Adebanjo',
			token: 'token',
			userId: 1
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

const history = {
  push: jest.fn()
}

describe('register user', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch REGISTER_SUCCESS after succesfully creating account', (done) => {
    moxios.stubRequest(url, { status: 201, response: mockData.data });

    const { data: { user } } = mockData;
    const expectedActions = [
      { type: 'REGISTER_REQUEST',
        user
      },
      { type: 'REGISTER_SUCCESS',
        user
      },
    ];

    const store = mockStore(initialState);
    store.dispatch(actions.register(user, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  })

  it('should dispatch REGISTER_FAIL after succesfully creating account', (done) => {
    moxios.stubRequest(url, { status: 404, response: mockData.error });

    const { data: { user } } = mockData;
    const { error } = mockData;
    const expectedActions = [
      { type: 'REGISTER_REQUEST',
        user
      },
      {
        type: 'REGISTER_FAIL',
        error
      },
    ];

    const store = mockStore(initialState);
    store.dispatch(actions.register(user, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  })
})
