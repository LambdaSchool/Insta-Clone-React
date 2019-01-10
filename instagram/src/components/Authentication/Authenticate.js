import React from "react";
import LoginPage from "../Login/LoginPage";

const Authenticate = WrappedComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        loginInfo: {
          username: "",
          password: ""
        },
        users: [
          { username: "default", password: "default" },
          { username: "tommytutone", password: "jenny" },
          { username: "realwallaceshawn", password: "inconceivable" }
        ]
      };
    }

    nameHandler = event => {
      // event.preventDefault();
      this.setState({
        loginInfo: {
          username: event.target.value,
          password: this.state.loginInfo.password
        }
      });
    };

    passHandler = event => {
      // event.preventDefault();
      this.setState({
        loginInfo: {
          username: this.state.loginInfo.username,
          password: event.target.value
        }
      });
    };

    checkCreds = event => {
      event.preventDefault();
      console.log("submit");
      this.state.users.forEach(user => {
        if (
          this.state.loginInfo.username === user.username &&
          this.state.loginInfo.password === user.password
        ) {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("thisUser", user.username);
          this.setState({ loggedIn: true });
        }
      });
      console.log("got it");
    };

    logout = () => {
      console.log("logout");
      this.setState({
        loggedIn: false,
        loginInfo: {
          username: "",
          password: ""
        }
      });
      localStorage.clear();
      console.log(localStorage);
    };

    componentDidMount() {
      const logTok = JSON.parse(localStorage.getItem("loggedIn"));
      if (logTok) this.setState({ loggedIn: logTok });
    }

    render() {
      if (!this.state.loggedIn) {
        return (
          <LoginPage
            userName={this.state.loginInfo.username}
            password={this.state.loginInfo.password}
            nameInput={this.nameHandler}
            passInput={this.passHandler}
            onSubmit={this.checkCreds}
          />
        );
      } else return <WrappedComponent logout={this.logout} />;
    }
  };
};

export default Authenticate;
