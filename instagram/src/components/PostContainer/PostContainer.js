import React, { Component } from "react";
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.username = this.props.posts.username;
    this.thumbNail = this.props.posts.thumbnailUrl;
    this.imageUrl = this.props.posts.imageUrl;
    this.timeStamp = this.props.posts.timestamp;
    this.comments = this.props.posts.comments;
    this.state = {
      //putting likes in state because if the post is liked, this number needs to increase, liked will be used to toggled color of heart
      likes: this.props.posts.likes,
      liked: false,
      comments: this.props.posts.comments,
      newComment: "",
    };      
  }

  handleNewComment = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (e) => {
    // console.log(e.keyCode)
    if(e.keyCode === 13){
      // console.log('Yes Captain?')
      const comments = this.state.comments.slice();
      const newComment = {
        username: "King_Ding",
        text: this.state.newComment,
      };
      comments.push(newComment);
      this.setState({comments, newComment: ""});
    }
  }

  // I don't think i need to do this?
  // componentDidMount() {
  //   this.setState({ post: this.props })
  // }
  
  render() {
    // console.log("This is the prop: ",this.props.posts.comments);
    // console.log("This is the post in state: ",this.state);

    return(
      <div className="postContainer">
        <PostBody username={this.username}
          likes={this.state.likes}
          thumbNail={this.thumbNail}
          imageUrl = {this.imageUrl}
          timeStamp = {this.timeStamp}
          comments = {this.state.comments}
          />
        <div>
        <input
          name="newComment"
          onChange={this.handleNewComment}
          value={this.state.newComment}
          placeholder="Add a comment..."
          onKeyDown={this.handleSubmit}
        />
        </div>
      </div>
    )
  };
}



const PostBody = props => {
  return (
    
    <div className="ccard">
      {/* {console.log(props)} */}
      <div className="icon-container">
        <img className="logo" src={props["thumbNail"]} alt="something meaningful"/>
      </div>
      <div>
        {props["username"]}
      </div>
      <div className="image-container">
        <img className="image" src={props["imageUrl"]} alt="something meaningful"/>
      </div>
      <div>
        (Heart)  (Message bubble)
      </div>
      <div>
        {props.likes} likes
      </div>
      <div>
        {props.comments.map(comment => {
          // console.log(comment)
          return <div key={comment.username + comment.text}><CommentSection comments={comment}/></div>
        })}
      </div>
      <div className="fadedText">
        {props.timeStamp}
      </div>
      
    </div>
  )
};









export default PostContainer; 