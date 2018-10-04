import React from 'react';
import headerLogo from '../../igtext.png';
import './Login.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
    this.usernameRef = React.createRef();
  }

  componentDidMount() {
    this.usernameRef.current.focus();
  }

  usernameText = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  setStorage = (e) => {
    e.preventDefault();
    localStorage.setItem('username', this.state.username);
    window.location.reload();
  }


  render() {
    return (
      <div className="login-container">
        <form className="box" onSubmit={this.setStorage}>
          <img src={headerLogo} alt="Instagram Logo Text"/>
          <p>Sign up to see photos and videos from your friends.</p>
          <input ref={this.usernameRef} onChange={this.usernameText} className="username-input" type="text" placeholder="Username" />
          <input className="password-input" placeholder="Password" type="password"/>
          <button onClick={this.setStorage} className="login-button">Login</button>
        </form>
      </div>
    )
  }
}