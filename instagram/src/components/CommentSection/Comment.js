import React from 'react';
import styles from './commentsection.css';

class Comment extends React.Component{
    render(){
        return(
            <div className = "comment">
                <span className = "username">{this.props.username}  </span> {this.props.text}
            </div>
        )
    }     
}

export default Comment;