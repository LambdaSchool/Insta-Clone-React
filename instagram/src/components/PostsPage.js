import React, { Component } from 'react';
import '../App.css';
import dummyData from '../dummy-data';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';


class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount() {
  this.setState({posts:dummyData});
}

searchPostsHandler = e => {
  const posts = this.state.posts.filter(p => {
    if (p.username.startsWith(e.target.value)) {
      return p;
    } else {
      return this.state.posts;
    }
  });
  this.setState({ filteredPosts: posts });
};

  render() {
    return (
      <div className="PostsPage">
        <SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler}/>
        <PostContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;
