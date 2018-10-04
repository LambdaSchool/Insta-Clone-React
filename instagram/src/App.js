import React, { Component } from 'react';
import PostPage from './components/PostPage/PostPage';
import Authenticate from './components/Authentication/Authenticate';

import './App.css';

class App extends Component {
  render() {
    return (
      <PostPage />
    )
  }
}

export default Authenticate(App);
