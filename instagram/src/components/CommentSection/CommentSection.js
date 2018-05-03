import React, { Component } from "react";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.comments = this.props.comments.text;
    this.commentFrom = this.props.comments.username;
  }

  





  render() {
    // console.log("this is what is being passed to comment:", this.props.comments.text)
    return(
      <div>
        <div>
          <b>{this.commentFrom}</b> {this.comments}
        </div>
        <div>
          {/* <input
            name="comments"
            onChange={this.handleNewComment}
            value={this.comments}
            placeholder="Add a comment..."

          /> */}
        </div>
      </div>
    )
  }
}


export default CommentSection;