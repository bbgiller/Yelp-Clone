import React from 'react';

class SignUpSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '',first_name:'', last_name:'',zip_code:'' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
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
          <div className="signup-form">
            <form onSubmit={this.handleSubmit}>
              Signup for Yalp
              <br/>
              {this.renderErrors()}
              <div className="signup-firstname">
                <br/>
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    placeholder="First Name"
                  />
               </div>
               <div className="signup-lastname">
                <br/>
                  <input type="text"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    placeholder="Last Name"
                  />
               </div> 

               <div className="signup-username">
                <br/>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Email"
                  />
               </div>  

               <div className="signup-password">
                <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
               </div> 

               <div className="signup-zipcode">
                <br/>
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
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
             
            </form>
          </div>
        );
    }
    


}

export default SignUpSessionForm;