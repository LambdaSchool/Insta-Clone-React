import React from "react";
import Post from "./Post";
import CommentSection from "./../CommentSection/CommentSection";

import { BodyContainer } from "../Styles/Styles";
// import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: props.userData,
      likes: props.userData.likes
    };
  }

  addLike = event => {
    event.preventDefault();
    let newLikes = this.state.likes + 1;
    this.setState({
      likes: newLikes
    });
  };

  render() {
    return (
      <BodyContainer>
        <Post
          user={this.state.userData}
          addLike={this.addLike}
          likes={this.state.likes}
        />
        <CommentSection
          user={this.state.userData}
          postId={this.state.userData.imageUrl}
        />
      </BodyContainer>
    );
  }
}

export default PostContainer;
