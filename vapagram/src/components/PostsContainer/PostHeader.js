import React from 'react';
import styled from 'styled-components';

const PostHeaderClass = styled.div`
  display: flex;
  padding: 1%;
`;
const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
`;
const PostThumb = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const PostHeader = (props) => {
  return (
    <PostHeaderClass>
      <PostThumbWrapper>
        <PostThumb
          alt='post header'
          className='post-thumb'
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostHeaderClass>
  );
};

export default PostHeader;
