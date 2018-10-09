import React, { Component } from "react";
import PostHeader from "./PostHeader";
import Image from "./Image";
import Icons from "./Icons";
import CommentContainer from "./CommentSection/CommentContainer";
const PostContainer = prop => {
  return (
    <div className="post-container">
      <PostHeader
        username={prop.data.username}
        thumbnailUrl={prop.data.thumbnailUrl}
      />
      <Image ImageUrl={prop.data.ImageUrl} />
      <Icons like={prop.data.like} timestamp={prop.data.timestamp} />
      {prop.data.comments.map(item => {
        return <CommentContainer item={item} />;
      })}
    </div>
  );
};

export default PostContainer;
