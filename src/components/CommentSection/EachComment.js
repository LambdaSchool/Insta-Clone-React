import React from 'react';
import './CommentSection.css';

const EachComment = (props) => {
  console.log(props);

   return(
     <div className="Comment">


<p><span>{props.userData.username}: </span> {props.userData.text}</p>

     </div>
)}
export default EachComment
