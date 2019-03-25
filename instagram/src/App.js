import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state= {
      data: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
      <SearchBar/>
      <PostContainer posts = {this.state.data}/>
      </div>
    );
  }
}

export default App;
