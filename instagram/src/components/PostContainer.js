import React from 'react';
import CommentSection from './CommentSection';
import './PostContainer.css'
import PropTypes from 'prop-types';

function PostContainer(props) {
    return (
        <div className='postContainer'>
            <header className='postHeader'>
                <img className='userThumbnail' src={props.postData.thumbnailUrl} alt=''/>
                <h2 className='username'>{props.postData.username}</h2>
            </header>
            <img className='posterImg' src={props.postData.imageUrl} alt='post'/>
            <div className='actionIcons'>
                <img className='actionIcon' src='https://openclipart.org/image/2400px/svg_to_png/234835/heart-outline.png' alt='heart'/>
                <img className='actionIcon' src='https://st2.depositphotos.com/4335005/8479/v/950/depositphotos_84799002-stock-illustration-outline-icon-of-speech-bubble.jpg' alt='speechBubble'/>
            </div>
                <div className='likeNumber'>{props.postData.likes} likes</div>
            <div className='likes'></div>
            <CommentSection postComments={props.postData.comments} />
            <div className='timestamp'>{props.postData.timestamp}</div>
            <input placeholder='Add a comment...' />
        </div>
    )
}

PostContainer.propTypes = {
    postData: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
}

export default PostContainer;