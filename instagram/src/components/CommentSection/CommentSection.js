import React, { Component } from 'react';

class CommentSection extends Component {
  state = {
    comments: this.props.comments,
    newComment: {
      username: 'John Doe',
      text: '',
    } 
  }

  addComment = (event) => {
    event.preventDefault();
    let stateCopy = this.state;
    stateCopy.comments = [...stateCopy.comments, stateCopy.newComment];
    this.setState({
      comments: stateCopy.comments,
      newComment: {
        username: 'John Doe',
        text: '',
      }
    });
  }

  inputComment = (event) => {
    const stateCopy = this.state;
    stateCopy.newComment.text = event.target.value;
    this.setState({
      newComment: stateCopy.newComment
    });
  }
  
  render() {
    return (
    <div className = 'comments'>
      {this.state.comments.map((comment)=>{
        return (
          <div className= 'comment'>
            <div className= 'comment__user'>{comment.username}</div>
            <div className= 'comment__text'>{comment.text}</div>
          </div>
        )
      })}
      <div className= 'comments__box'>
        <form onSubmit = {this.addComment}>
          <input className = 'comments__box-area' type = 'text'
              onChange = {this.inputComment} placeholder = 'add comment' value = {this.state.newComment} />
        </form>
      </div>
    </div>
    )
  }

}

export default CommentSection;
