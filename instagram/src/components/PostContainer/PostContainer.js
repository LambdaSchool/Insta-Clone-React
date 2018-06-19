import React from 'react'
import './PostContainer.css';
import CommentSection from './CommentSection/CommentSection'
import PropTypes from 'prop-types';

function PostContainer (props) {
    return (
        <div className="post-container">
            <div className="post-header">
                <div className="user-thumbnail">
                    <img src={props.post.thumbnailUrl} alt={props.post.username + " thumbnail"}></img>
                </div>
                <div className="user-name">
                    <h3>{props.post.username}</h3>
                </div>
            </div>
            <div className="main-img">
                <img src={props.post.imageUrl} alt="main post image"></img>
            </div>
            <div className="main-content">
            <div className="icon-strip">
                <div className="left-icons">
                <div className="heart-icon post-icon"><i class="far fa-heart"></i></div>
                <div className="speech-icon post-icon"><i class="far fa-comment"></i></div>
                </div>
                <div className="right-icons">
                <div className="bookmark-icon post-icon"><i class="far fa-bookmark"></i></div>
                </div>
            </div>
            <div className="likes-strip">
                <h3>{"" + props.post.likes + ((props.post.likes > 1) ? " likes" : " like")}</h3>
            </div>
            <CommentSection comments={props.post.comments} />
            <input type="text" className="new-comment"/>

            </div>
        </div>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
    })
};

export default PostContainer;