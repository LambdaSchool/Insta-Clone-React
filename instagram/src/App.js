import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./Authentication/Authenticate";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContainer>
        <PostsPage isLoggedIn={this.props.isLoggedIn} />
      </AppContainer>
    );
  }
}

export default Authenticate(App);
