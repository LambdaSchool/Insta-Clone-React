import React from "react";
import styled from "styled-components";

const Button = styled.div`
  .login__btn {
    width: 100%;
    color: white;
    margin: 0.25rem 0;
    padding: 0.5rem;
    background-color: @clr-highlight;
    border: 1px solid @clr-highlight;
    border-radius: 4px;
  }
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: "",
      passText: ""
    };
  }
  typingUser = e => {
    this.setState({
      userText: e.target.value
    });
  };
  typingPass = e => {
    this.setState({
      passText: e.target.value
    });
  };
  render() {
    return (
      <div className="login">
        <form className="login__form" action="submit">
          <h2 className="login__logo">Instaclone</h2>
          <h3 className="login__desc">
            Sign in to see photos and videos from your friends.
          </h3>
          <input
            className="login__user input"
            type="username"
            value={this.state.userText}
            placeholder="Username"
            onChange={this.typingUser}
            required
          />
          <input
            className="login__pass input"
            type="Password"
            value={this.state.passText}
            placeholder="password"
            onChange={this.typingPass}
            required
          />
          <Button>
            <button
              className="login__btn"
              onSubmit={e =>
                this.props.signIn(e, this.state.userText, this.state.passText)
              }
              onClick={e =>
                this.props.signIn(e, this.state.userText, this.state.passText)
              }
            >
              Log In
            </button>
          </Button>
          <div className="login__tos">
            By signing in, you agree to our <a>Terms</a>, <a>Data Policy</a> and{" "}
            <a>Cookies Policy</a>.
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
