import React from "react";
import './CommentSection.css';
//import CommentSection from './components/CommentSection/CommentSection.js';
// import PostContainer from './components/PostContainer/PostContainer.js';

const CommentSection = props => {
    console.log(this.props);
    return (
        <div className='comment'> 
            {console.log(props)}
            {props.comments.text}
            {/* {props.comments.map(comment => {
                 <div key={comment.username}> {comment.text} </div>
            })} */}
        </div>
    )
}

  
  

export default CommentSection;