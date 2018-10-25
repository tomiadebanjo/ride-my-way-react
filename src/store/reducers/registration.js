import constants from '../constants';

const { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } = constants

const registration = (state = {}, action) => {
	switch (action.type) {
		case REGISTER_REQUEST:
			return {
        registering: true
      };
		case REGISTER_SUCCESS:
			return {}
		case REGISTER_FAIL:
			return {}
		default:
			return state;
	}
};

export default registration;
