import React, { Component } from "react";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";
import styled from "styled-components";

const LogOutButton = styled.button`
  border: 1px solid lightgray;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  margin-top: 100px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(1.08);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    let storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      this.setState({ posts: storedPosts });
    }
    this.setState({
      posts: dummyData
    });
  }

  logout = props => {
    console.log("LOGOUT PROPS", props);

    localStorage.removeItem("username");
    this.setState({
      isLoggedIn: false
    });
    window.location.reload();
  };

  handleSearchChange = e => {
    let posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value.toLowerCase())) {
        return post;
      }
    });
    return this.setState({ filteredPosts: posts });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <SearchBarContainer
          searchPosts={this.handleSearchChange}
          logout={this.logout}
        />
        <LogOutButton onClick={this.logout}>LOGOUT</LogOutButton>
        <PostContainer
          data={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
