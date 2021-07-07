import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPostHeader = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;

  img {
    border-radius: 50%;
    height: 33px;
    margin: 15px 10px 15px 15px;
  }
`;

const PostHeader = props => {
  return (
    <StyledPostHeader>
      <img src={props.thumbnail} alt="avatar" />
      {props.username}
    </StyledPostHeader>
  );
}

PostHeader.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default PostHeader;
