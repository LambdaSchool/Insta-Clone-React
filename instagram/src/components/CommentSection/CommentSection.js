import React from 'react';
import Proptypes from 'prop-types';
import Comment from './Comment';

const CommentSection = props => {

    return(
        <div className="commentsection">
            {props.com.comments.map(item => <Comment com={item}/>)}
        </div>
    )
}

export default CommentSection;