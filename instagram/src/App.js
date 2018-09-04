import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
