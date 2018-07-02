import React, { Component } from 'react';
import PostsPage from './components/PostsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: []
    }
  }
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    )
  }
}

export default App;
