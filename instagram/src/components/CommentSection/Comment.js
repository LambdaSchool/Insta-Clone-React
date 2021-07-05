import React from 'react';
import styled from 'styled-components';

const CommentContent = styled.div `
  p {
    span{
      font-weight: bold;
    }
  }
`;

const Comment = props => {
  return (
    <CommentContent>
      <p><span>{props.comment.username}</span> {props.comment.text}</p>
    </CommentContent>
  )
}

export default Comment;