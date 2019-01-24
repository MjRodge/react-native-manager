import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  employee_update,
  employee_create,
  employees_fetch_success,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: employee_update,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: employee_create });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: employees_fetch_success, payload: snapshot.val() });
      });
  };
};
