import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { employee_update } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: employee_update,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => Actions.employeeList({ type: 'reset' }));
  };
};
