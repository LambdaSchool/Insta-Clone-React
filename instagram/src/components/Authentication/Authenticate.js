import React from "react";

import Login from "../Login/Login";

const Authenticate = App => 
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }


    componentDidMount() {
      console.log(localStorage.getItem('username'));
      if(localStorage.getItem('username') !== null) {
        this.setState({loggedIn: true})
      }
    }

    render() {
      if(this.state.loggedIn === false) {
        return <Login />;
      } else {
        return <App />;
      }
    }
  }


export default Authenticate;