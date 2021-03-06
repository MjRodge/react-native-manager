import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import firebaseConfig from '../firebaseConfig';
import RouterComponent from './router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={reduxStore}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
