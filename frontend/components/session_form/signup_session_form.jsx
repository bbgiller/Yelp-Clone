import React from 'react';
import {Link} from 'react-router-dom';

class SignUpSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '',first_name:'', last_name:'',zip_code:'' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
      // debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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

            <div className="image" >

            </div>
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="signup-form-box">
              <h2 className="signup-text">Sign Up for Yalp</h2>
         
              {this.renderErrors()}

               <div className="name-container">

              <div className="signup-firstname">
                
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    placeholder="First Name"
                  />
               </div>
               <div className="signup-lastname">
                
                  <input type="text"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    placeholder="Last Name"
                  />
               </div> 
               </div> 

               <div className="signup-email">
             
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                  />
               </div>  

               <div className="signup-password">
               
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
               </div> 

               <div className="signup-zipcode">
             
                  <input type="text"
                    value={this.state.zip_code}
                    onChange={this.update('zip_code')}
                    placeholder="Zip Code"
                  />
               </div> 
                
                {/* <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/> */}
                
                <button className="signup-session-submit" type="submit" value={this.props.formType}>Sign Up</button>
                <div className="below-form-signup">

                <p className="already">Already on Yalp?</p>
                <Link to="/login" className="bottom-login">Login</Link>

                </div>
             
            </form>
          </div>
        </div>
        );
    }
    


}

export default SignUpSessionForm;