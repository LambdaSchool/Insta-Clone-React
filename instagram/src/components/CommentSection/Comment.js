import React from "react";
import PropTypes from "prop-types"

const Comment = props => {
  return (
    <div>
      <h3>{props.comment.username}</h3>
      <p>{props.comment.text}</p>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;