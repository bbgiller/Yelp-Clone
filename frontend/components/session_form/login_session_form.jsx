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
              Sign into Yalp
              <br/>
              
              {this.renderErrors()}
              <div className="login-email">
                
             
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                    placeholder="Email"
                  />
                </div>
                <br/>
                
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-password"
                    placeholder="Password"
                  />
                <br/>
                <br/>
                <input className="login-session-submit" type="submit" value={this.props.formType} />
                <button className="demo-button" onClick={this.handleDemo}>Demo</button>
                <p>New to Yalp?</p>
                <Link to="/signup">Sign Up</Link>
              
            </form>
          </div>
          </div>
        );
    }
    


}

export default LoginSessionForm;