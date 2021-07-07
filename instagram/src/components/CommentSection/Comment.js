import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div>
      <p className="comment">
        <span className="comment-user">{props.comment.username}</span>
        {props.comment.text}
      </p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object
};

export default Comment;
