import React from 'react'
import PropTypes from 'prop-types'


const Comment = props =>{
  
     return (
       <div className = 'Comment'>
           <p className= 'text'>{props.comment.text} </p>
           <p className = 'name'> {props.comment.username}</p>
            </div>


     )
};
     Comment.propTypes = {
          comment: PropTypes.shape({
          text: PropTypes.string,
          username: PropTypes.string
          })
     }



 


export default Comment;