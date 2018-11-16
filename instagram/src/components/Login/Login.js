import React, { Component } from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LoginInputs = styled.input`
  padding: 1rem;
  border-radius: 5px;
  margin: 2rem;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleLogin = e => {
    let username = this.state.username;
    localStorage.setItem("username", username);
    window.location.reload();
  };

  render() {
    return (
      <LoginForm onSubmit={this.handleLogin} name="login">
        <h1>InstaClone Login</h1>
        <LoginInputs
          required
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Enter Username"
        />
        <LoginInputs
          required
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
          placeholder="Enter Password"
        />
        <LoginInputs type="submit" onSubmit={this.handleLogin} value="LOGIN" />
      </LoginForm>
    );
  }
}

export default Login;
