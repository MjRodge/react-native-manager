import { email_changed, password_changed } from '../actions/types';

const initial_state = { email: '', password: '' };
export default (state = initial_state, action) => {
  switch (action.type) {
    case email_changed:
      return { ...state, email: action.payload };
    case password_changed:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
