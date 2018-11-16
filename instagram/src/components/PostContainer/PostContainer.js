import React from "react";
import "./PostContainer.css";
import PostCard from "./PostCard";
import styled from "styled-components";

const PostEnvelop = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1.8rem;
`;

const PostContainer = props => {
  return (
    <PostEnvelop>
      {props.data.map((user, i) => {
        return <PostCard data={user} key={user.thumbnailUrl} />;
      })}
    </PostEnvelop>
  );
};

export default PostContainer;
