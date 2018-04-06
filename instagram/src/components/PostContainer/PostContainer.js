import React from 'react';
import  CommentSection  from '../CommentSection/CommentSection.js';
import './PostContainer.css';

export const PostContainer = props => {
    function click(e) {
        e.target.classList.toggle('PostContainer__icons-liked')
        props.click(e.target.value);
    }

    function commentSubmit(e) {
        e.preventDefault();
        props.comment(e);
        e.target.firstChild.value = "";
    }
    
    return <div className="PostContainer">
        <div className="PostContainer__main">
          <div className="PostContainer__header">
            <img className="PostContainer__thumbnail" src={props.data.thumbnailUrl} alt="" /> {props.data.username}{" "}
          </div>
          <img className="PostContainer__image" src={props.data.imageUrl} alt="" />
          <div className="PostContainer__icons">
            <button className="PostContainer__icons-icon" value={props.i} onClick={click}>
              <i class="far fa-heart fa-2x" />
            </button>
            <button className="PostContainer__icons-icon">
              <i class="fa fa-comment fa-2x" />
            </button>
          </div>
          <div className="PostContainer__comment-content">
            {props.data.likes} Likes{" "}
          </div>
          <CommentSection comments={props.data.comments} />
          <form onSubmit={commentSubmit} id={props.i}>
            <input className="PostContainer__input" placeholder="leave a comment..." />
            <span>...</span>
          </form>
        </div>
      </div>;
}