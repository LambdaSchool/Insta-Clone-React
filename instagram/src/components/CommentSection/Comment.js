import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostComment = styled.div`
  margin-bottom: 10px;
`;

const StyledUsername = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const StyledUserText = styled.span`
  font-size: 1.6rem;
`;

const Comment = props => {
  return (
    <PostComment>
      <StyledUsername>{props.username}</StyledUsername>
      <StyledUserText>{props.text}</StyledUserText>
    </PostComment>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Comment;
