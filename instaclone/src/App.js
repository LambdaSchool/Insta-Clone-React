import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage'

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      search: ''
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchPosts = e => {
    e.preventDefault();
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(this.state.search)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts});
  };

  render() {
    return (
      <PostsPage />
    );
  }
}

export default App;