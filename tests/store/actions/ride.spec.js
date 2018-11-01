import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../../src/store/actions/ride';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const fetchUrl = '/rides';
const createUrl = 'users/rides';
const getUrl = 'rides/1';

const initialState = {};

const mockData = {
	data: {
		rides: [],
		rideDetails: {
			id: 1
		}
	},
	ride: {
		id: 1
	},
	singleRide: {}
};

describe('register user', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch FETCH_RIDE_SUCCESS', (done) => {
    moxios.stubRequest(fetchUrl, { status: 201, response: mockData.data });

    const { data: { rides } } = mockData;
    const expectedActions = [
      {
        type: 'FETCH_RIDE_REQUEST',
      },
      {
        type: 'FETCH_RIDE_SUCCESS',
        rides
      },
    ];

    const store = mockStore(initialState);
    store.dispatch(actions.fetchRide())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  })

  it('should dispatch FETCH_RIDE_FAIL', (done) => {
    moxios.stubRequest(fetchUrl, { status: 404, response: mockData.data });

    const { data: { rides } } = mockData;
    const expectedActions = [
      {
        type: 'FETCH_RIDE_REQUEST',
      },
      {
        type: 'FETCH_RIDE_FAIL',
      },
    ];

    const store = mockStore(initialState);
    store.dispatch(actions.fetchRide())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  })

  it('should dispatch CREATE_RIDE_SUCCESS', (done) => {
    moxios.stubRequest(createUrl, { status: 201, response: mockData.data });

    const { data: { ride } } = mockData;
    const expectedActions = [
      {
        type: 'CREATE_RIDE_REQUEST',
      },
    ];

    const store = mockStore(initialState);
    store.dispatch(actions.createRide(ride))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  })

  // it('should dispatch GET_SINGLE_RIDE', (done) => {
  //   moxios.stubRequest(getUrl, { status: 200, response: mockData });

  //   const { ride } = mockData;
  //   const expectedActions = [
  //     {
  //       type: 'GET_SINGLE_RIDE_START',
  //     },
  //     {
  //       type: 'GET_SINGLE_RIDE',
  //       ride
  //     },
  //   ];

  //   const store = mockStore(initialState);
  //   store.dispatch(actions.getRide(1))
  //     .then(() => {
  //       expect(store.getActions()).toEqual(expectedActions);
  //       done();
  //     })
  // })

})
