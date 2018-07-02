import React from 'react';
import Login from '../components/Login/login';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      loggedIn:false
    };
  }

    componentDidMount() {
      if (localStorage.getItem('user')) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    }
    render () {
      if(this.state.loggedIn) return <App />
      return <Login />;
    }
  };
export default Authenticate;
