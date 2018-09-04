import React from 'react';
 
function CommentFeedback(props) {
    return (
        <div className="feedback-container">
        <div className="feedback-items">
            <div className="right-feedback">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
            <div className="left-feedback">
                <i className="far fa-bookmark"></i>
            </div>
        </div>
        <div className="like">
            <p><bold># likes</bold></p>
        </div>
        </div>
    );
};

 export default CommentFeedback;