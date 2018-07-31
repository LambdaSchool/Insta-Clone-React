import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';

const Post = props => {
    return (
        <div className="post-border">
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
            <img src={props.post.imageUrl} alt="post-content" className="post-image" />
            </div>
            <CommentSection comment={props.post.comments} />
        </div>
    );
};

export default Post;