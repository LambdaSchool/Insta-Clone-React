import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBarContainer/SearchBar.js';
import PostConatiner from './components/PostContainer/PostContainer.js'


class App extends Component {
	constructor() {
		super();
		this.state = {
			post: dummyData
		};
	}

  render() {
    return (
      <div className="App">
      	<SearchBar />
      	<PostContainer post={this.state.post} />
      </div>
    );
  }
}

export default App;
