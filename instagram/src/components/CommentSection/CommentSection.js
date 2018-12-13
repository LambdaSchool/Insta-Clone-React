import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div>
        {props.comments.map(comment =>{
            return <Comment username={comment.username} text={comment.text} key={comment.username + comment.text}/>
        })}
        </div>
    );
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;