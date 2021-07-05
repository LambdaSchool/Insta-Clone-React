import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styled from 'styled-components';

const CommentContainer = styled.div `
  padding: 10px;
  line-height: 1;
`;

const Comments = styled.div `
  margin-bottom: 20px;
`;

const CommentFormContainer = styled.div `
  padding-top: 20px;
  border-top: 1px solid rgba(170, 170, 170, 0.637);
`;

const CommentInput = styled.input `
  border: none;
  width: 100%;
  color: rgba(170, 170, 170, 0.637);
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      commentInput: ""
    }
  }

  changeInput = event => {
    this.setState({ commentInput: event.target.value })
  }

  addComment = event => {
    event.preventDefault();
    this.setState(prevState => {
      let comments = prevState.comments.slice();
      comments.push({
        username: localStorage.getItem('username'),
        text: this.state.commentInput
      });

      return {
        comments: comments,
        commentInput: ""
      };
    });
  }

  render() {
    return (
      <CommentContainer>
        <Comments>
          {this.state.comments.map(entry => <Comment comment={entry} key={entry.text} />)}
        </Comments>
        <CommentFormContainer>
          <form onSubmit={this.addComment}>
            <CommentInput onChange={this.changeInput} type="textarea" value={this.state.commentInput} placeholder="Add a comment..."></CommentInput>
          </form>
        </CommentFormContainer>
      </CommentContainer>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default CommentSection;