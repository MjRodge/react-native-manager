import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { employee_update, employee_create } from './types';

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
