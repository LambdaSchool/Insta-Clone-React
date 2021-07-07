import React, { Component } from 'react';
import './CommentSection.css';
import CommentActions from './CommentActions';
import CommentLikes from './CommentLikes';
import Comment from './Comment';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostComments = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1.6rem;
  padding: 15px;
`;

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: 0,
      comment: '',
      liked: false,
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes,
    });
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = this.state.comment;
    this.setState(prevState => ({
      comments: [...prevState.comments, { username: 'Andres', text: newComment }],
      comment: '',
    }));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = e => {
    e.preventDefault();
    if(!this.state.liked) {
      this.setState(prevState => ({
        likes: prevState.likes + 1,
        liked: true,
      }));
    } else {
      this.setState(prevState => ({
        likes: prevState.likes - 1,
        liked: false,
      }));
    }
  }

  render() {
    return (
      <PostComments>
        <CommentActions onClick={this.handleClick} liked={this.state.liked} />
        <CommentLikes likes={this.state.likes} />
        {this.state.comments.map((user, index) =>
          <Comment key={index} username={user.username} text={user.text} />
        )}
        <CommentForm comment={this.state.comment} onSubmit={this.addNewComment} onChange={this.handleChange} />
      </PostComments>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.isRequired,
    })
  ).isRequired,
  likes: PropTypes.number.isRequired,
}
