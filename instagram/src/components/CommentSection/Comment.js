import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment-text">
      <p className="user">{props.comment.username}</p>
      <p className="comment">{props.comment.text}</p>{' '}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
