import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employee Listings"
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            initial
          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
