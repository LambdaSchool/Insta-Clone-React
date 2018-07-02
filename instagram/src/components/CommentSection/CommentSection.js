import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      value: "",
      username: "chainchompa"
    };
  }
  eventHandler = event => {
    this.setState({comment:event.target.value});
  }

  addComment = event => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({text: this.state.comment, username: this.state.username});
    this.setState({comments, comment : ""});
  }
  render() {
  return (
    <div>
        <div className="comments-wrapper">
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        </div>
      <form className="add-comment" onSubmit={this.addComment}>
        <input type="text" placeholder="Add a comment..." value ={this.state.comment} onChange={this.eventHandler}/>
      </form>
    </div>
  );
  };
}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
