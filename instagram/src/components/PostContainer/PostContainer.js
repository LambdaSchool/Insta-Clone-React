import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      likes: 0,
      clickedLike: false,
    }
  } 

  componentDidMount() {
    console.log('PostContainer - componentDidMount()');
    const copyOfComments = this.props.postData.comments;
    const copyOfLikes = this.props.postData.likes;
    this.setState({comments: copyOfComments, likes: copyOfLikes});
  }

  componentDidUpdate() {
    console.log('PostContainer - componentDidUpdate()');
  }

  addComment = (newCommentObj) => {
    console.log(this.props.postData.comments);
    this.setState({
      comments: [...this.state.comments, newCommentObj]
    })
  }

  toggleLike = () => {
    let copyOfLikes = this.state.likes;
    if(this.state.clickedLike){
      this.setState({likes: copyOfLikes -= 1, clickedLike: false})
    } else {
      this.setState({likes: copyOfLikes += 1, clickedLike: true})
    }
  }

  render() {
    console.log('PostContainer - render()')
    const {imageUrl, thumbnailUrl, timestamp, username} = this.props.postData;
    return (
      <div className="post-container">
        <div className="thumbnail-container">
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
          <h4 className="username">{username}</h4>
        </div>
        <img className="main-img" src={imageUrl} alt="User Post"/>
        <div className="comment-section">
          <div className="icons">
            <FontAwesomeIcon onClick={this.toggleLike} className="heart-icon" icon={faHeart} size="2x" />
            <FontAwesomeIcon className="comment-icon" icon={faComment} size="2x" />
          </div>
          <p className="likes">{this.state.likes} Likes</p>
          <CommentSection addComment={this.addComment} comments={this.state.comments} />
          <p className="timestamp">{timestamp}</p>
        </div>
      </div>
    )
  }
}

PostContainer.propTypes = {
  postData: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
}

export default PostContainer;