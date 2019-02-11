import { employees_fecth_success } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case employees_fecth_success:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};
