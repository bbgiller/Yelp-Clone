import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../actions/session_actions';
import configureStore from '../../store/store';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        // this.store = configureStore()
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemo() {
      this.setState({email:'arthurmorgan@gmail.com',password:'123456'})
      console.log('demo test')
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }

    render() {
        return (
          <div>
       

         

          <div className="session-header">
          <Link to="/">Yalp</Link>
          </div>
        

            <div className="image" ></div>

           
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h2 className="login-text">Sign into Yalp</h2>
              
              
              {this.renderErrors()}
              <div className="login-email">
                
             
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                    placeholder="Email"
                  />
                </div>
               
                
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-password"
                    placeholder="Password"
                  />
                
                <br/>
                <button className="login-session-submit" type="submit" value={this.props.formType}>Sign In</button>
                <button className="demo-button" onClick={this.handleDemo}>Demo</button>
              
            </form>
                <div className="below-form-login">
                <p>New to Yalp?</p>
                <Link to="/signup" className="bottom-login">Sign Up</Link>

                </div>
          </div>
          </div>
        );
    }
    


}

export default LoginSessionForm;