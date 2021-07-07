import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPostImg = styled.div``;

const PostContent = props => {
  return (
    <StyledPostImg>
      <img src={props.image} alt="postphoto" />
    </StyledPostImg>
  );
}

PostContent.propTypes = {
  image: PropTypes.string.isRequired,
}

export default PostContent;
