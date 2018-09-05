import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: ''
    }
  }

  changeUsername = (e) => {
    this.setState({usernameInput: e.target.value})
  }

  setUsername = (e) => {
    localStorage.setItem('username', this.state.usernameInput)
  }

  render() {
    return(
      <form>
        <input placeholder="Username" onChange={this.changeUsername}/>
        <input placeholder="Password" />
        <button onClick={this.setUsername}>Login</button>
      </form>
    )
  }
  
}

export default Login;