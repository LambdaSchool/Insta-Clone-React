import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount() {
    this.setState({posts: dummyData});
   } 
   searchAll = e => {
     const posts = this.state.posts.filtr(p => {
       if (p.username.includes(e.target.value)) {
         return p;
       }
     });
     this.setState({filteredPosts: posts });
   };

  render() {
    return (
      <div className="App">
        <SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchAll} />
        
        <PostsContainer posts={this.state.filteredPosts.length> 0 ? this.state.filteredPosts : this.state.posts } />
      </div>
    );
  }
}

export default App;
