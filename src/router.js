import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Login" initial />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee Listings"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
