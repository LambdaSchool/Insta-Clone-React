import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostCommentActions = styled.div`
  font-size: 2.6rem;
  margin-bottom: 10px;

  i {
    margin-right: 20px;
  }
`;

class CommentActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({ hover: true })
  }

  handleMouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    return (
      <PostCommentActions>
        <i
          style={{ display: 'inline-block', cursor: 'pointer' }}
          className={this.props.liked || this.state.hover ? 'fas fa-heart' : 'far fa-heart'}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.props.onClick} />
        <i 
          className="far fa-comment" />
      </PostCommentActions>
    );
  }
}

CommentActions.propTypes = {
  onClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
}

export default CommentActions;
