import authentication from '../../../src/store/reducers/authentication'

const mockState = {
  user: {
    email: 'tomiadebanjo@gmail.com',
    fullName: 'Adebanjo',
    token: 'token',
    userId: 1
  }
}

describe('user authentication reducer test', () => {
  it('should set initial state', () => {
    const state = authentication(undefined, { type: '@@INIT'});
    expect(state).toEqual({});
  });

  it('should test REGISTER_REQUEST', () => {
    const action = { type: 'REGISTER_REQUEST' };
    const state = authentication(undefined, action);
    expect(state).toEqual({ registering: true });
  })

  it('should test REGISTER_SUCCESS', () => {
    const action = {
      type: 'REGISTER_SUCCESS',
      user: {
        email: 'tomiadebanjo@gmail.com',
        fullName: 'Adebanjo',
        token: 'token',
        userId: 1
      }
  };
    const state = authentication(undefined, action);
    expect(state).toEqual({
      ...mockState,
      isAuthenticated: true,
      user: action.user
    });
  })

  it('should test REGISTER_FAIL', () => {
    const action = { type: 'REGISTER_FAIL' };
    const state = authentication(undefined, action);
    expect(state).toEqual({});
  })

  it('should test LOGIN_REQUEST', () => {
    const action = {
      type: 'LOGIN_REQUEST',
      user: {
        email: 'tomiadebanjo@gmail.com',
        fullName: 'Adebanjo',
        token: 'token',
        userId: 1
      }
    };
    const state = authentication(undefined, action);
    expect(state).toEqual({
      ...mockState,
      user: action.user
    });
  })

  it('should test LOGIN_SUCCESS', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      user: {
        email: 'tomiadebanjo@gmail.com',
        fullName: 'Adebanjo',
        token: 'token',
        userId: 1
      }
    };
    const state = authentication(undefined, action);
    expect(state).toEqual({
			...mockState,
			isAuthenticated: true,
			user: action.user,
		});
  })

  it('should test LOGIN_FAIL', () => {
    const action = { type: 'LOGIN_FAIL' };
    const state = authentication(undefined, action);
    expect(state).toEqual({});
  })

  it('should test LOGOUT', () => {
    const action = { type: 'LOGOUT' };
    const state = authentication(undefined, action);
    expect(state).toEqual({});
  })
})
