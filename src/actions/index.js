import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  email_changed,
  password_changed,
  login_user_success,
  login_user_fail,
  login_user,
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
    dispatch({ type: login_user });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch(error => {
        console.log(error);
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
  Actions.employeeList();
};
const loginUserFail = dispatch => {
  dispatch({ type: login_user_fail });
};
