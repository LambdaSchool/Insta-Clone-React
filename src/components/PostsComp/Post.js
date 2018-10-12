import React from 'react';
import CommentSectionContainer from '../CommentSectionComp/CommentSectionContainer';

const Post = props => {
  return (
    <article className="main-post">
      <header className="main-post__header">
        <div className="main-post__user-img">
          <img src={props.userThumbnail} alt="user profile" className="main-post__img"/>
        </div>
        <div className="main-post__user">
          <p>{props.username}</p>
        </div>
      </header>
      <section className="main-post__img">
        <img src={props.image} alt="post" />
      </section>
      <CommentSectionContainer 
        comments={props.comments} 
        timestamp={props.timestamp}
        likes={props.likes}
        commentId={props.postId + 'C'}
        likeId={props.postId + 'H'}
        shouldLikeId={props.postId + 'L'}
      />
    </article>
  );
}

export default Post;