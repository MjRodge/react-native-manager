import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './listItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.employees.length !== this.props.employees.length) {
      console.log('didUPdate function');
      this.props.employeesFetch();
    }
  }

  render() {
    console.log(this.props.employees);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({ item }) => <ListItem employee={item} />}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    console.log('mapping');
    return { ...val, uid };
  });
  console.log(employees);
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
