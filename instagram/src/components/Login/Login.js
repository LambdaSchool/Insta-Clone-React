// There should be a username input, a password input, and a Login button.
// The component should invoke the login function in app.js when a user logs in.
// This login function should set a username on localStorage. You'll need to check local storage to see if a user is logged in.
// Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.
import React from "react";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  //Updates the value in our input boxes
  handleInputChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    const user = this.state.username;
    const password = this.state.password;
    //  adding the keyname "user" to the local storage and creating a key value "user" in which we will pass to the keyname : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
    //forces the page to reload: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
    window.location.reload();
  };

  // logout() {
  //   localStorage.removeItem('user')
  //   this.setState({is})
  // }

  render() {
    return (
      <div className="login-page">
        <div className="circle">
          <i className="fas fa-chevron-down" />
        </div>
        <div>
          <form className="login">
            <h3>Login</h3>
            <input
              className="login-input"
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button className="login-button" onClick={this.handleSubmit}>
              Sign In
            </button>
            <span className="social-box">
              <span className="inner-social-box-facebook">
                <i className="fab fa-facebook-f" />
                <h6 className="social-text">Login with Facebook</h6>
              </span>
              <span className="inner-social-box-twitter">
                <i className="fab fa-twitter" />
                <h6 className="social-text">Login with Twitter</h6>
              </span>
              <h5 className="create">Create An Account</h5>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
