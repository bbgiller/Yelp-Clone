import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

const store = configureStore()

document.addEventListener('DOMContentLoaded', () => {
   window.currentUser = currentUser;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
    const root = document.getElementById('root');
    //TESTING START
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING END



    ReactDOM.render(<Root store={store} />, root)
})