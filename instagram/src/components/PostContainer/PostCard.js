import React, { Component } from "react";
import CommentCard from "../CommentSection/CommentCard";
import styled from "styled-components";

const CardPost = styled.div`
  width: 100%;
  margin: 0 auto 2rem;
  background: white;
  max-width: 38rem;
  border: 1px solid lightgray;
  box-shadow: -1px 1px 15px 0 rgba(0, 0, 0, 0.2);
`;

const PostHeader = styled.div`
  width: 100%;
  display: flex;
  background: white;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 2rem;
  padding: 1px;
  margin: 8px;
  max-height: 40px;
`;

const User = styled.p`
  font-size: 1rem;
  padding-top: 0.2rem;
`;

const PostImage = styled.img`
  width: 100%;
`;

const SocialBox = styled.div`
  display: flex;
  margin-bottom: -0.5rem;
`;

const Likes = styled.p`
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  color: grey;
  margin-left: 1.3rem;
  margin-bottom: -0.02rem;
`;

const SocialIcons = styled.i`
  transform: scale(-1, 1);
  margin-left: 1.2rem;
  font-size: 1.4rem;
  margin-top: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(-1.2, 1.2);
  }
`;

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.data.likes
    };
  }

  toggleLike = e => {
    if (e.target.classList.contains("liked")) {
      e.target.classList.toggle("liked");
      let likes = this.state.likes - 1;
      this.setState({ likes });
    } else {
      e.target.classList.toggle("liked");
      let likes = this.state.likes + 1;
      this.setState({ likes });
    }
  };

  toggleComment = e => {
    //   if(e.target.classList.contains('no-comment')){
    //     e.target.classList.toggle('no-comment');
    //     let likes = this.state.likes - 1;
    //     this.setState({ likes });
    //   }
    //   else {e.target.classList.toggle('liked');
    //   let likes = this.state.likes + 1;
    //   this.setState({ likes })
    // }
  };

  render() {
    // console.log("POSTCARD PROPS", this.props);
    return (
      <CardPost>
        <PostHeader>
          <Avatar src={this.props.data.thumbnailUrl} alt="user avatar" />
          <User>{this.props.data.username}</User>
        </PostHeader>
        <PostImage src={this.props.data.imageUrl} alt="user post" />
        <SocialBox key="socialContainer">
          <SocialIcons className="far fa-heart" onClick={this.toggleLike} />
          <SocialIcons
            className="far fa-comment"
            onClick={this.toggleComment}
          />
        </SocialBox>
        <Likes>{this.state.likes} likes</Likes>
        <CommentCard
          id={this.props.id}
          comments={this.props.data.comments}
          timestamp={this.props.data.timestamp}
        />
      </CardPost>
    );
  }
}

export default PostCard;
