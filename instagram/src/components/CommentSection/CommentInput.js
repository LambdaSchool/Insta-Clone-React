import React, { Fragment } from "react";
import styled from "styled-components";

const WriteAComment = styled.input`
  border: none;
  width: 80%;
  padding: 1.2rem 0.5rem 1.2rem 1.2rem;
  margin-right: 3rem;
  font-size: 0.8rem;
  font-weight: bold;
  font-family: "Font Awesome 5 Free", "Open Sans", sans-serif;
`;

const AddCommentButton = styled.button`
  border: none;
  background: white;
  font-size: 1.1rem;
  padding-top: 1.2rem;
  color: gray;
  cursor: pointer;
`;

const CommentInput = props => {
  return (
    <form>
      <WriteAComment
        value={props.value}
        name="comment"
        type="text"
        className="fas fa-ellipses-h"
        onChange={props.handleChange}
        placeholder="Add a comment..."
      />
      <AddCommentButton
        htmlFor="comment"
        type="submit"
        onClick={props.addComment}
        className="fas fa-ellipsis-h"
      />
    </form>
  );
};

export default CommentInput;
