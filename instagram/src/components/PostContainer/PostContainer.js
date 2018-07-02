import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} dummyData={p}/>)}
    </div>
  );
};

PostContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string,
      likes: PropTypes.number,
      imageUrl: PropTypes.string,
      thumbnailUrl: PropTypes.string
     })
  )
};

export default PostContainer;
