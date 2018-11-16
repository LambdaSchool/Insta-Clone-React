import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

let CommentString = styled.p`
  line-height: 0.5rem;
`;

const UserName = styled.span`
  font-weight: bold;
  padding: 0 0.5rem 0 1.1rem;
`;

const Comment = props => {
  return (
    <CommentString id={props.id}>
      <UserName>{props.data.username}</UserName>
      {props.data.text}
    </CommentString>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
