import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import Post from './Post';

const PostContainer = props => {
    return (
        <div className="posting" onClick={props.onClick}>
            <PostHeader post={props.post}/>
            <Post post={props.post} />
            <div className="bottom-text">
                <div className="comments-icons"><img src="img/comment-heart.png" alt="Comment heart" onClick={(event) => {props.like(props.index, event)}}/><img src="img/comment-bubble.png" alt="Comment bubble" className="comment-bubble"/></div>
                <div className="likes">{props.post.likes} likes</div>
                <CommentSection comments={props.post.comments} timestamp={props.post.timestamp} input={props.input} comment={props.comment} clear={props.clear} />
            </div>
        </div>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object)
    })
};

export default PostContainer;
