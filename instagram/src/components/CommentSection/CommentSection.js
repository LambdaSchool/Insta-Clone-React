import React, {Component} from 'react';
import Comment from './Comment';
import './comment-section.css';
import AddAComment from '../CommentSection/AddAComment';

class CommentSection extends Component {
 constructor(props) {
   super(props);
   this.state ={
     comments: props.comments,
     newComment: '',
     username: 'jjashcraft',
   }
 }

 addComment= (event) => {
 event.preventDefault();
 let comments = this.state.comments.slice();
 let newComment = this.state.newComment;
 comments.push({text: newComment, username: this.state.username});
 this.setState({comments: comments});

 }  

 handleChange = (event) => {
this.setState({newComment: event.target.value});
 }

 render() {
    return (
      <div className='comments'>
            <ul>
            {this.state.comments.map((comment, index) => {
                
    return <Comment key = {Math.random()} username = {comment.username} text = {comment.text}/>
       })}
        </ul>
    
<AddAComment value = {this.state.newComment} handleChange={this.handleChange} addComment = {this.addComment} />
  </div>
    
      );
};
};

export default CommentSection;