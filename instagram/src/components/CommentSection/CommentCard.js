import React, {Component} from 'react';
import Comment from './Comment';
import './Comment.css';
import { PropTypes } from 'prop-types';
import CommentInput from './CommentInput';

let moment = require('moment');

class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp,
      comment: ''
    }
  }
  
  // componentDidMount() {
  //   console.log(this.state.comments);
    
    // let storedComments = JSON.parse(localStorage.getItem('comments'));
    // if(storedComments) {this.setState({ comments: storedComments})}
    // if(storedComments) {this.setState({ comments: this.state.comments})}
    // }
    
    
    addComment = e => {
      e.preventDefault();
      // console.log(...this.state.comments);
      
      let newComments = [...this.state.comments,
        {username: "Ghosty", text: this.state.comment}];
        localStorage.setItem('comments', JSON.stringify(newComments))
      
      this.setState({
        comments: [...this.state.comments,
          {
            username: "Ghosty",
            text: this.state.comment,
          }],
          comment: '',
        })
      }
      
      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }
      
      render () {
        return (
          <div className="comment-card">
        {this.state.comments.map(
          (comment, i) => <Comment
          data={comment}
          key= {i+1}
          />
          )}
        {/* <p className="timestamp" >{this.state.timestamp}</p> */}
        <p className="timestamp" >{moment().format("MMMM Do YYYY, hh:mm a")}</p>
        <CommentInput 
          props={this.props}
          value={this.state.comment}
          addComment={this.addComment}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

CommentCard.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
}

export default CommentCard;
