import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBtz3PMIf9M2g4umrn8607VI5mQHZSsF2c',
    authDomain: 'auth-f62f5.firebaseapp.com',
    databaseURL: 'https://auth-f62f5.firebaseio.com',
    projectId: 'auth-f62f5',
    storageBucket: 'auth-f62f5.appspot.com',
    messagingSenderId: '585886201877'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App;
