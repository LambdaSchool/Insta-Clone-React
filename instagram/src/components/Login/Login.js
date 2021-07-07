import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = () => {
    const newUsername = this.state.username;
    const newPassword = this.state.password;
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    window.location.reload();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange} />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange} />
        <button disabled={this.state.username && this.state.password ? false : true}>Login</button>
      </form>
    );
  }
}
