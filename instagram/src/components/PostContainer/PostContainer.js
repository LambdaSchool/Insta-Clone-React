import React from 'react';
import Post from './Post'

const PostContainer = props => {
        return(
            <div>
                {/* <Post data={props.data.map((post, index) => <Post key={index} post={post} />)} /> */}
                {props.data.map((post, index) => <Post key={index} 
                post={post}
                />)}
            </div>
        )
}

export default PostContainer