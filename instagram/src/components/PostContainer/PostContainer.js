import React from 'react';
import CommentSection from './../CommentSection/CommentSection';
import './post.css';
import styled from 'styled-components';

const Post = styled.div `
  border: 1px solid rgba(170, 170, 170, 0.637);
  border-radius: 2px;
  max-width: 640px;
  margin-top: 40px;
`;

const PostHeader = styled.div `
  display: flex;
  align-items: center;
`;

const PostImage = styled.img `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0 10px;
`;

const LikesContainer = styled.div `
  padding: 10px 10px 0;
`;

const LikesImage = styled.img `
  padding-right: 10px;
`;



const PostContainer = props => {
  return (
    <Post>
      <PostHeader>
        <PostImage src={props.data.thumbnailUrl} alt="" />
        <h2 className="user-name">{props.data.username}</h2>
      </PostHeader>

      <div className="post-content">
        <img src={props.data.imageUrl} alt="" />
      </div>

      <LikesContainer>
        <div>
          <LikesImage onClick={() => props.like(props.data.timestamp)} src={require('../images/favourite-heart-lrg.png')}></LikesImage>
          <LikesImage src={require('../images/speech-bubble.png')}></LikesImage>
        </div>
        <p>{props.data.likes} likes</p>
      </LikesContainer>

      <CommentSection comments={props.data.comments} />
    </Post>
  )
}

export default PostContainer;