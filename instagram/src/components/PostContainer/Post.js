import React from 'react';

function Post(props) {
  return (
    <div>
       <img src={props.post.thumbnailUrl}/>
      <h2>{props.post.username}</h2>
      <img src={props.post.imageUrl} likes/>
    </div>
  )
}

export default Post;