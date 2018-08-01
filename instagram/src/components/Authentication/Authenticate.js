import React from "react";
import Login from "./../Login/Login";
const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      // return <App />;
      return this.state.loggedIn ? <App /> : <Login />;
    }
  };

export default Authenticate;
