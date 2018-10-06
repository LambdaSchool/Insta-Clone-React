import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faComment);
library.add(faCompass);
library.add(faUser);
library.add(faSearch);



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: [],
      commentInput: '',
      searchInput: '',
      likes: []
    };
  }

  componentDidMount() {
    const comments = [];
    const likes = [];

    dummyData.map(data => {
      return [comments.push(data.comments), likes.push(data.likes)];  
    })

    this.setState({
      data: dummyData,
      comments: comments,
      likes: likes
    });
  }

  addNewComment = (index, event) => {
    if(event.which === 13) {

      const comment = {
        username: 'Cyanide6033',
        text: event.target.value,
        id: Date.now()
      };

      const newComments = this.state.comments;
      newComments[index].push(comment);

      this.setState({
        commentInput: '',
        comments: newComments
      })
    }
  }

  newLike = (index) => {
    const newLike = this.state.likes;
    newLike[index] += 1;

    this.setState({
      likes: newLike
    })
  }

  handleSubmit = event => {
      this.setState({
        commentInput: event.target.value
      });
  }

  handleSearch = event => {
    this.setState({
      searchInput: event.target.value
    });
  }

  searchUp = event => {
    if(event.which === 13) {
      const posts = this.state.data;
      console.log(event.target.value);
      const newPost = posts.filter(post => {
        return post.username.includes(event.target.value);
      });

      console.log(newPost);

      this.setState({
        data: newPost,
        searchInput: ''
      });
    }
  }

  render() {
    return (
      <>
        <SearchBar searchInput={this.state.searchInput} handleSearch={this.handleSearch} searchUp={this.searchUp} />
        <PostContainer posts={this.state.data} likes={this.state.likes} commentInput={this.state.commentInput} handleSubmit={this.handleSubmit} addNewComment={this.addNewComment} newLike={this.newLike} />
      </>
    );
  }
}

export default App;
