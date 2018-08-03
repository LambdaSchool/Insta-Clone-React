import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  addNewComment = e => {
    const newComment = { text: this.state.comment, username: 'jperalta' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    console.log(comments);
    this.setState({comment: '', comments: comments});
  }

  editComment = e => {
    this.setState({ comment: e.target.value });
  }

  render () {
    return (
      <div className='comment-section'>
        {this.state.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        <form onSubmit={this.addNewComment}>
          <input value={this.state.comment} onChange={this.editComment} placeholder="Add a comment..." />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
