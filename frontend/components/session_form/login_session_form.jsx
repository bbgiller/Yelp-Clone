import React from 'react';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
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

    // renderErrors() {
    //     return(
    //       <ul>
    //         {this.props.errors.map((error, i) => (
    //           <li key={`error-${i}`}>
    //             {error}
    //           </li>
    //         ))}
    //       </ul>
    //     );
    // }

    render() {
        return (
          <div>
          <div className="login-header">
              <h1>Yalp</h1>
          </div>

         


          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              Sign into Yalp
              <br/>
              
              {/* {this.renderErrors()} */}
              <div className="login-username">
                <br/>
             
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
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
              
            </form>
          </div>
          </div>
        );
    }
    


}

export default LoginSessionForm;