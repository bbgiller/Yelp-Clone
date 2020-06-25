import React from "react";
import {Route, Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import SignUpFormContainer from './session_form/signup_form_container';
import SignUpSessionForm from './session_form/signup_session_form';
import LoginSessionForm from './session_form/login_session_form'
import LogInFormContainer from './session_form/login_form_container';
// import Header from './header/header'

const App = () => (
  <div>
      <header>

       {/* <LogInFormContainer /> */}
       <SignUpFormContainer />
    </header>
      <Switch>
    
    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />

    </Switch>

  </div>
);

export default App;