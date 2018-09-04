import React from "react";
import PropTypes from "prop-types"

const Comment = props => {
  return (
    <div>
      <h3>{props.comment.username}</h3>
      <p>{props.comment.text}</p>
      <input placeholder="Add a comment..." />
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.sting
}

export default Comment;