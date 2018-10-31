import ride from '../../../src/store/reducers/ride'

const initialState = {
  fetchRides: {
    rides: [],
    loading: false,
    error: ''
  },
  createRide: {
    loading: false,
    error: ''
  }
};

describe('ride reducer test', () => {
  it('should set initial state', () => {
    const state = ride(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });
})
