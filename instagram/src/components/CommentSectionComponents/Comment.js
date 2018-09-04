import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const Comment= (props) => {
    return (
        <div className='comment'>
            <span className='commenter-name'>{props.comment.username}</span>
           <span className='comment-body'>{props.comment.text}</span>{''}
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