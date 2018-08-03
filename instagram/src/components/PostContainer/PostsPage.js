import React from 'react';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import { withRouter } from 'react-router-dom';

const PostsPage = (props, { history }) => {
    return (
        <div className="App">
            <SearchBar filter={props.filter} />
            {props.data.map((item, index) => <PostContainer post={item} key={item.timestamp} index={index} like={props.like} liked={item.liked} input={props.input} comment={props.comment} clear={props.clear} onClick={() => props.history.push(`/${index}`)} />)}
        </div>
        );
}

export default withRouter(PostsPage);

