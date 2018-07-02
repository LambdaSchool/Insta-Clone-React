import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    }
  }

  // componentDidMount() {
  //   if (window.localStorage.getItem("usernameInput")) {
  //     this.setState({
  //       posts: JSON.parse(window.localStorage.getItem("comments"))
  //     });
  //   } else {
  //     //this.setState({ posts: dummyData});
  //   }
  //   window.localStorage.setItem("comments", JSON.stringify(dummyData));
  // }
  changeUsernameInput = event => {
    this.setState({usernameInput: event.target.value});
  }
  changePasswordInput = event => {
    this.setState({passwordInput: event.target.value});
  }

  loginSubmit = event => {
    event.preventDefault();
    const username = this.state.usernameInput;
    localStorage.setItem('user', username);
    window.location.reload();
  }
  render() {
    return (
      <div>
      <h1>Login Page</h1>
      <form onSubmit={this.loginSubmit}>
        <input onChange = {this.changeUsernameInput} type="text" name="username" value={this.state.usernameInput}/>
        <input onChange = {this.changePasswordInput} type="text" name="pass" value={this.state.passwordInput}/>
        <button onClick={this.loginSubmit}>Login</button>
      </form>
      </div>
      )
    }
  }

export default Login;
