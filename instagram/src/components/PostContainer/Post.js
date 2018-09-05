import React from 'react';
import './PostContainer.css';

function Post(props) {
  return (
    <div className="post">
      <div className="heading">
        <img src={props.post.thumbnailUrl} alt={''}/>
        <h2>{props.post.username}</h2>
      </div>
      <img src={props.post.imageUrl} alt={''}/>
    </div>
  )
}

export default Post;