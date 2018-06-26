import React from 'react';
import './CommentInput.css'

const CommentInput = props => {
    return(
        <div key={props.pewpew.timestamp}>
            <span>{props.pewpew.timestamp}</span>
            <input placeholder="Post a Comment" />
        </div>
    )
}

export default CommentInput;