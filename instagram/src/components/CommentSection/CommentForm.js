import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ comment, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="comment"
        placeholder="Add a comment..."
        value={comment}
        onChange={onChange}
        style={{ border: 'none' }} />
    </form>
  );
}

CommentForm.propTypes = {
  comment: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CommentForm;
