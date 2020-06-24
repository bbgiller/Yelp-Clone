import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';

const store = configureStore()

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch



    ReactDOM.render(<h1>Yalp!</h1>,root)
})