import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import NewComment from '../NewComment/NewComment';

const PostContainer = (props) => {
  return (
    <section className='post-container'>
      <PostHeader  username={props.data.username}
                   thumbnailUrl={props.data.thumbnailUrl}/>
                 <img className='post-cta-image' src={props.data.imageUrl}
           alt={props.data.username} />
      <PostContent likes={props.data.likes}
                   comments={props.data.comments}/>
      <section className="post-time">
       {props.data.timestamp}
      </section>
      <NewComment />
    </section>
  );
}

export default PostContainer;
