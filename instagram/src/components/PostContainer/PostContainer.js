import React from 'react';
import Post from './Post';


const PostContainer = props => {
    console.log('postcontainer',props)
    return (
        <div>

        {props.posts.map((post, index) =>
        <Post
        key={index}
        post={post}
        />
        )}  

        </div>
    )
}


export default PostContainer;