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
	},
	singleRide: {}
};

describe('ride reducer test', () => {
  it('should set initial state', () => {
    const state = ride(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
	});

	it('should test RFETCH_RIDE_REQUEST', () => {
		const action = { type: 'FETCH_RIDE_REQUEST' };
		const state = ride(undefined, action);
		expect(state).toEqual({
			...initialState,
			fetchRides: {
				...initialState.fetchRides,
				loading: true
			}
		});
	});
})
