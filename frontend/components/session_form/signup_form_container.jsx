import { connect } from 'react-redux';
import React from 'react';
import SignUpSessionForm from './signup_session_form';
import { Link } from 'react-router-dom';
import { login, signup, removeErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
      formType: 'signup',
      navLink: <Link to="/signup">sign up</Link>,
    };
  };
  
  const mapDispatchToProps = dispatch => (
     {
      processForm: (user) => dispatch(signup(user)),
      removeErrors: () => dispatch(removeErrors())
    }
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUpSessionForm);
  