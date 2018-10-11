import React from "react";
import Post from "./Post";
import "./Post.css";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post key={post.imageUrl} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;