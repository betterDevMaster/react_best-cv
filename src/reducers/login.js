import { combineReducers } from 'redux';
import { LOGIN_WITH_LINKEDIN, loginWithLinkedin } from '../actions';

const initialState = {
  firstName: '',
  secondName: '',
  email: '',
  userId: '',
};

const loginReducer = (state = initialState, { type, user } ) => {
  switch (type) {
    case LOGIN_WITH_LINKEDIN:

      return Object.assign({}, state, {
        firstName: user.firstName,
        secondName: user.secondName,
        email: user.email,
        userId: user.userId,
      });

    default:
      return state;
  };
};

export default loginReducer;