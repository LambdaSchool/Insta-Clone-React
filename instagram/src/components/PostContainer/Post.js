import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: props.dummyData,
      likes: props.dummyData.likes
    }
  }

  addLikes = (event, i) => {
    event.preventDefault();
    let originalLikes = this.state.likes;
    let likes = originalLikes;
    if (originalLikes === likes) {
      likes = (likes + 1);
    } else {
      likes = originalLikes;
    }
    this.setState({likes});
  }

  render() {
  return (
    <div className="post-border">
      <div className="post-header">
         <img
           alt="Profile Thumbnail"
           className="thumbnail"
           src={this.state.dummyData.thumbnailUrl}
         />
       <p>{this.state.dummyData.username}</p>
     </div>
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={this.state.dummyData.imageUrl}
        />
      </div>
      <div className="actions">
        <div className="like-comment">
          <img src="https://image.ibb.co/e2FnZd/like.png" alt="like" onClick={this.addLikes}/>
          <img src="https://image.ibb.co/hk3KfJ/comment.png" alt="comment"/>
        </div>
        <div className="save">
          <img src="https://image.ibb.co/nuT7Zd/save.png" alt="save"/>
        </div>
      </div>
      <div className="likes">
       <p>{this.state.likes} likes</p>
      </div>
      <CommentSection comments={this.state.dummyData.comments} />
    </div>
  );
};
}
export default Post;
