import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'


class App extends Component {
constructor(props){
  super(props);
  this.state = {};
}

  render() {
    return (
      <div>
      <PostsPage />
      </div>
    );
  }
}

export default App