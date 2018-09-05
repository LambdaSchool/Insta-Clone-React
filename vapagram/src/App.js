import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.setState({
      posts: dummyData
    });
    console.log('comments', this.state.comments);
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer
          posts={this.state.posts}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default App;
