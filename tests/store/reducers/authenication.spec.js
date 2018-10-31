import authentication from '../../../src/store/reducers/authentication'

describe('user authentication test', () => {
  it('should set initial state', () => {
    const state = authentication(undefined, { type: '@@INIT'});
    expect(state).toEqual({});
  });
})
