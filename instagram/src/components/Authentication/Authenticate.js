import React from 'react';
import LoginPage from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
      constructor() {
          super();
          this.state = {
              loggedIn: false
          };
      }

      componentDidMount() {
          if (localStorage.getItem('username')) {
              this.setState({ loggedIn: true })
          } 
      }

    render() {
      return this.state.loggedIn ? <App /> : <LoginPage /> ;
    }
  };

export default Authenticate;