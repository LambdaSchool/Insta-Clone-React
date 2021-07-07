import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPostContainer = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  margin: 0 auto 20px auto;
  width: 642px;
`;

const PostContainer = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        return (
          <StyledPostContainer key={post.username + post.timestamp}>
            <PostHeader username={post.username} thumbnail={post.thumbnailUrl} />
            <PostContent image={post.imageUrl} />
            <CommentSection comments={post.comments} likes={post.likes} />
          </StyledPostContainer>
        );
      })}
    </>
  );
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default PostContainer;
