import React from 'react';
import './CommentSection.css';


const CommentInput = props => {
    return (
        <form>
            <input className="comment-input" type="text" placeholder="Add a comment..."/>
        </form>
    )
}

export default CommentInput;