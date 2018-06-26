import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return(
        <div>
            {props.userComments.map((comment, index) =>{
                return(
                    <div key={props.userComments.comment}>
                        <span>{comment.username}</span>
                        {comment.text}
                    </div>
                )
            })}
        </div>
    )
}

export default CommentSection;