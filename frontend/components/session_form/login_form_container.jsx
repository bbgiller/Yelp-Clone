import { connect } from 'react-redux';
import React from 'react';
import LoginSessionForm from './login_session_form';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/login">sign up to access features</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);
