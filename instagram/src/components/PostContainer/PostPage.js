import React from "react";
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';


class PostPage extends React.Component {
  render() {
    return(
      <div>
        <SearchBar />
        <PostContainer
          posts={this.props.data} 
          addNewComment={this.props.addNewComment} 
          clickHeart={this.props.clickHeart}
        />
      </div>
    )
  }
}

export default PostPage;