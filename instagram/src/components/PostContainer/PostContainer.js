import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => (
    <div className="post">
        <div className="post-header">
            <img src={props.data.thumbnailUrl} alt="user thumbnail" />
            <h4>{props.data.username}</h4>
        </div>
        <div className='post-image'>
            <img src={props.data.imageUrl} alt="User post"/>
            <div></div>
        </div>
        <CommentSection comments={props.data.comments} likes={props.data.likes} time={props.data.timestamp}/>
    </div>
);

export default PostContainer;