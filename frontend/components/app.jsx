import React from "react";
import {Route, Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import SignUpFormContainer from './session_form/signup_form_container';
import SignUpSessionForm from './session_form/signup_session_form';
import LoginSessionForm from './session_form/login_session_form'
import LogInFormContainer from './session_form/login_form_container';
// import Header from './header/header'
import Header from './header/header'
import HeaderContainer from './header/header_container'
import {AuthRoute} from '../util/route_util'
import {withRouter} from 'react-router'

const App = ({location}) => (
  <div>
      <header>
        { (location.pathname=='/login' || location.pathname=='/signup') ? null : <HeaderContainer/> } 
       {/* <LogInFormContainer /> */}
       {/* <SignUpFormContainer /> */}
    </header>
      <Switch>
    
    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />

    </Switch>

  </div>
);

export default withRouter(App);