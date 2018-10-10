import React from 'react';

const CommentEntry = props => {

    return (
      <form className='comment-form' onSubmit={props.addNewComment}>
        <input
          type='text'
          name='newComment'
          placeholder='Add a comment...' onChange={props.handleCommentChange} value={props.newComment}
/>
      </form>

    )

}

export default CommentEntry;
