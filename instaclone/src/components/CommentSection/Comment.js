import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => <p className="comment"><strong>{props.comment.username}</strong> {props.comment.text} <i className="fas fa-minus-circle" onClick={props.deleteComment}></i></p>;

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default Comment;