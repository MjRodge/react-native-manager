import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, TextField, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextField
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'name', value: text })
            }
          />
        </CardSection>
        <CardSection>
          <TextField
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'phone', value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdate({ prop: 'shift', value: day })
            }
          >
            <Picker.item label="Monday" value="Monday" />
            <Picker.item label="Tuesday" value="Tuesday" />
            <Picker.item label="Wednesday" value="Wednesday" />
            <Picker.item label="Thursday" value="Thursday" />
            <Picker.item label="Friday" value="Friday" />
            <Picker.item label="Saturday" value="Saturday" />
            <Picker.item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  {
    employeeUpdate,
  }
)(EmployeeCreate);
