import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import UserLogin from './components/LoginSection/UserLogin';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default UserLogin(App);