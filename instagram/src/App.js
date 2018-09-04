import React, { Component } from 'react';
import dummyData from './dummy-data';
import styled from 'styled-components';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import Authenticate from './components/Authenticate/Authenticate';


const Container = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

`


class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      allPosts: [],
      search: ""
     
    }
  }

  componentDidMount() {
    this.setState ({
      posts: dummyData,
      allPosts: dummyData
    });
  }

  handleSearch = (event) => {
    this.setState ({
      search: event.target.value,
      posts: this.state.allPosts.filter(post => new RegExp(event.target.value, "i").exec(post.username))
    })
  }

  render() {
    return (
      <div className="App">
      <SearchBar  value={this.state.search} handleSearch={this.handleSearch} />
      <Container>
        {this.state.posts.map((post, index) => {
          return (
            <PostContainer key={index} posts={post} />
          )
        })}
        </Container>
      </div>
    );
  }
}

export default Authenticate(App);
