import React from 'react';

const CommentInput = props => {
    return (
        <form 
        onSubmit={props.submitHandler}
        >
            <input 
            className="comment-input" 
            type="text" 
            placeholder="Add a comment..." 
            onChange={props.changeHandler} 
            value={props.comment} 
            />
        </form>   
    );
};

export default CommentInput;