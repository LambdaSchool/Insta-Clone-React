import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import Comment from '../Comment/Comment';
import AddComment from '../AddComment/AddComment';
import './CommentSection.css';
class CommentSection extends Component {

  componentDidUpdate() {
    console.log('CommentSection - componentDidUpdate')
  }

  render() {
    console.log('CommentSection - render()')
    return (
      <div className="comment-section">
        {
          this.props.comments.map(comment => {
            return (
              <Comment key={uuidv4()} comment={comment} />
            )
          })
        }
        <AddComment addComment={this.props.addComment} />
      </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CommentSection;