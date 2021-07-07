import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';
import CommentsContainer from './../Comments/CommentsContainer';
import PropTypes from 'prop-types';
import { PostWrapper } from './../Styled/styled';
import './post.css';

class PostContainer extends React.Component {
  render() {
    // console.log(this.props.data);
    return (
      <div>
        {this.props.data.map(x => {
          return (
            <PostWrapper key={x.timestamp}>
              <PostHeader name={x.username} headerImage={x.thumbnailUrl} />
              <PostImage image={x.imageUrl} />
              <PostFooter likes={x.likes} />
              <CommentsContainer comments={x.comments} />
            </PostWrapper>
          );
        })}
      </div>
    );
  }
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
