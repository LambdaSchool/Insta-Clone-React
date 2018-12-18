import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData }); // initialize state with data
  }

  searchPostsHandler = e => {
    const filteredPosts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    })
    this.setState({ filteredPosts: filteredPosts });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default App;
