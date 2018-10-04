import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

class Comment extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('Comment - componentDidUpdate', prevProps, prevState);
  }

  render() {
    console.log('Comment - return statement');
    const {username, text} = this.props.comment;
    return (
      <div className="comment">
        <h4 className="username">{username}: </h4>
        <p className="text">{text}</p>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

export default Comment;