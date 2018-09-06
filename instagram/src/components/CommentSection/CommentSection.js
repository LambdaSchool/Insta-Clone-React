import React from "react";
import Comment from "./Comment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputComment: {},
    }
  }

  changeInput = event => {
    this.setState({inputComment:{
      text: event.target.value,
      username: 'horrifiedwooden'
    }})
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addNewComment(this.state.inputComment, this.props.postIndex)
  }

  render() {
    return(
      <div>
        {this.props.comments.map(comment => (
          <Comment 
            comment={comment} 
            key={comment.text}

          />
        ))}
        <form onSubmit={this.onSubmit}>
          <input 
            placeholder="Add a comment..."
            onChange={this.changeInput} 
          />
        </form>
      </div>
    )
  }
  
}

export default CommentSection;