import React from 'react';
import PropTypes from "prop-types";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import './CommentSection.css'
import Moment from 'react-moment'

library.add( faHeart, faComment )


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            comment: this.props.comment,
            likes: this.props.likes
        }
    }




  addComment = (e) => {
    let temp = {
        username: 'Abi Franklin',
        text: e.target.previousSibling.value
    }

    this.setState({
        comment: [...this.state.comment, temp]
    })
    e.target.previousSibling.value=''
  }

  enterItem = (e) => {
    if (e.charCode === 13) {
        let temp = {
            username: 'Abi Franklin',
            text: e.target.value
        }
    
        this.props.comment.push(temp)
        this.forceUpdate();
      e.target.value = '';
  }
}

    addLike = (e) => {
        this.setState({ likes: this.state.likes + 1 })
    }

    render(){
    return (
        <div>
            <div className="underPic">
                <div className="icons">
                    <FontAwesomeIcon icon="heart" onClick={this.addLike}/>
                    <FontAwesomeIcon icon="comment" />
                </div>
                <Moment parse="MMM D YYYY" className="timestamp" fromNow AGO>{this.props.time}</Moment>
            </div>
            <h2 id="likes">{this.state.likes} likes</h2>
          {this.state.comment.map(comment => (
              <div className="commentContainer">
                  <h2>{comment.username}</h2>
                  <p>{comment.text}</p>
             </div>
          ))}
          <div className="addComment">
            <input placeholder="Add a comment..." onKeyPress={this.enterItem}/>
            <button onClick={this.addComment}>...</button>
        </div>
        </div>
      );
    }
}

CommentSection.propTypes = { username: PropTypes.string.isRequired, text: PropTypes.string.isRequired, time: PropTypes.string.isRequired };


export default CommentSection