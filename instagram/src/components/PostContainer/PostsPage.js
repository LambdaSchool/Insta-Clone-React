import React from 'react';
import './post.css';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

const PostsPage = props => {
  return (
    <div>
      <SearchBar changeText={props.changeText} search={props.search} clearSearch={props.clearSearch} value={props.state.searchText} />
      {props.state.instaData.map(user => <PostContainer data={user} key={user.timestamp} like={props.addLike} />)}
    </div>
  )
}

export default PostsPage;