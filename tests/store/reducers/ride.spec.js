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

	it('should test FETCH_RIDE_REQUEST', () => {
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

	it('should test FETCH_RIDE_SUCCESS', () => {
		const action = { type: 'FETCH_RIDE_SUCCESS',
		rides: [
			{ id: 1,
				location: 'ikeja'
			}
		]
	};
		const state = ride(undefined, action);
		expect(state).toEqual({
			...initialState,
			fetchRides: {
				...initialState.fetchRides,
				rides: action.rides,
				loading: false
			}
		});
	});

	it('should test FETCH_RIDE_FAIL', () => {
		const action = { type: 'FETCH_RIDE_FAIL',
		error: 'error'
	};
		const state = ride(undefined, action);
		expect(state).toEqual({
			...initialState,
			fetchRides: {
				...initialState.fetchRides,
				error: action.error,
				loading: false,
				rides: []
			}
		});
	});

	it('should test CREATE_RIDE_REQUEST', () => {
		const action = { type: 'CREATE_RIDE_REQUEST' };
		const state = ride(undefined, action);
		expect(state).toEqual({
			...initialState,
			createRide: {
				...initialState.createRide,
				loading: true
			}
		});
	});

	it('should test CREATE_RIDE_SUCCESS', () => {
		const action = {
			type: 'CREATE_RIDE_SUCCESS',
			rides: [
				{
					id: 1,
					location: 'ikeja'
				}
			]
		};
		const state = ride(undefined, action);
		expect(state).toEqual({
			...initialState,
			createRide: {
				...initialState.createRide,
				rides: action.rides,
				loading: false
			}
		})
	})

	it('should test CREATE_RIDE_FAIL', () => {
		const action = {
			type: 'CREATE_RIDE_FAIL',
			error: 'error'
		};
		const state = ride(undefined, action);
		expect(state).toEqual({
			...initialState,
			createRide: {
				...initialState.createRide,
				error: action.error,
				loading: false
			}
		})
	})

	it('should test GET_SINGLE_RIDE', () => {
		const action = {
			type: 'GET_SINGLE_RIDE',
			ride: {
				id: 1
			}
		};
		const state = ride(undefined, action);
		expect(state).toEqual({
			...initialState,
			singleRide: {
				...initialState.singleRide,
				ride: action.ride
			}
		})
	})

	it('should test GET_SINGLE_RIDE_START', () => {
		const action = {
			type: 'GET_SINGLE_RIDE_START',
		};
		const state = ride(undefined, action);
		expect(state).toEqual({
			...initialState,
			singleRide: {}
		})
	})
})
