import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';

const Post = props => {
    return (
            <div><img src={props.post.imageUrl} alt="Post"/></div>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        imageUrl: PropTypes.string
    })
};

export default Post;
