import firebase from 'firebase';
import {
  email_changed,
  password_changed,
  login_user_success,
  login_user_fail,
} from './types';

export const emailChanged = text => {
  return {
    type: email_changed,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: password_changed,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginUserSuccess(dispatch, user);
          })
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: login_user_success,
    payload: user,
  });
};
const loginUserFail = dispatch => {
  dispatch({ type: login_user_fail });
};
