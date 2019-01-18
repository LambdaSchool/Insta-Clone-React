import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import LoginPage from './components/Login/Login';
import authenticate from './components/Authentication/authenticate';


class App extends Component {
  constructor() {
    super();
    this.state = {};
     }

  render() {
    return (
      <div className="App">
        
        <ConditionalView />
      </div>
    );
  }
}



const ConditionalView = authenticate(PostsPage)(LoginPage);

export default App;