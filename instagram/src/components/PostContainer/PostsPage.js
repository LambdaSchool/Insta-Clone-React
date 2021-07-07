import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 880px;
  margin: 0 auto;
  width: 100%;
`;

export default class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  filterPosts = e => {
    const filteredPosts = dummyData.filter(post =>
      post.username.includes(e.target.value));
    this.setState({ posts: filteredPosts });
  }

  render() {
    return (
      <AppContainer>
        <SearchBar onChange={this.filterPosts} />
        <PostContainer posts={this.state.posts} />
      </AppContainer>
    );
  }
}
