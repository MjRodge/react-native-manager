import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import firebaseConfig from '../firebaseConfig';
import LoginForm from './components/loginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={reduxStore}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
