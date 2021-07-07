import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostCommentLikes = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;

const CommentLikes = props => {
  return <PostCommentLikes>{props.likes + ' likes'}</PostCommentLikes>;
}

CommentLikes.propTypes = {
  likes: PropTypes.number.isRequired,
}

export default CommentLikes;
