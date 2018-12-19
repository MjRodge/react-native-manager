import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, TextField, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextField label="Email" placeholder="email@domain.com" />
        </CardSection>
        <CardSection>
          <TextField secureTextEntry label="Password" placeholder="password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
