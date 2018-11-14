import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    let storedPosts = JSON.parse(localStorage.getItem('posts'));
    if(storedPosts) {this.setState({ posts: storedPosts})}
    this.setState({
      posts: dummyData,
    })
  }

  handleSearchChange = e => {
    let posts = this.state.posts.filter(post => {
      if(post.username.includes(e.target.value)) {
        return post;
      }
    });return this.setState({ filteredPosts: posts})
  }

  render() {
    
    return (
      <div className="App">
        <SearchBarContainer 
          searchPosts={this.handleSearchChange}
        />
        <PostContainer 
          data={this.state.filteredPosts.length > 0 ?
            this.state.filteredPosts : 
            this.state.posts}
        />
      </div>
    );
  }
}

export default App;
