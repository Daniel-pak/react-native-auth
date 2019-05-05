import React, { Component } from 'react';
// import { TextInput } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            placeholder="***********"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind{this}}>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
