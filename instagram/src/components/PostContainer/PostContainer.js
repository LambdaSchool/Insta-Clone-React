import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';
import moment from 'moment'

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            thumbnail: props.thumbnail,
            img: props.img,
            likes: props.likes,
            comments: props.comments,
            time: props.time,
        };
    }

    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
        });
    };

    render() {
        return (
            <div className="post">
                <PostHeader user={this.state.user} thumbnail={this.state.thumbnail} />
                <img className="post-img" src={this.state.img} alt="" />
                <div className="stats">
                    <div className="icons">
                        <i class="far fa-heart fa-2x" onClick={this.incrementLikes} /> 
                        &emsp; 
                        <i class="far fa-comment fa-2x" 
                            onClick={() => alert(`Sending ${this.state.user} a ping!`)} />
                    </div>
                    <p className="likes">{this.state.likes} likes</p>
                </div>
                <CommentSection
                    comments={this.state.comments} 
                    time={moment(this.state.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()} />
            </div>
        );
    }
};

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timestamp: PropTypes.string,
    username: PropTypes.string,
};

export default PostContainer;