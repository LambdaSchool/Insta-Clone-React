import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  console.log(props);
  return (
    <div>
      <h2>Current Posts</h2>
      <div className="Post-user-row">
        <span>
          <img className="Post-thumbnail"
            src={props.thumbnailUrl}
            alt="user thumbnail"
            width={30}
            height={30}
          />
        </span>
        <span>{props.username}</span>
      </div>
      <div className="Post-image">
        <img src={props.imageUrl} alt="Post image" width={200} height={200} />
        {/* or use class name in css */}
      </div>
      <div className="Icon-row">

      </div>
      <div className="Comments">
        <CommentSection commentProps={props.comments}  />
      </div>
      <div className="Timestamp">
       {props.timestamp}
      </div>
      <div >
   <form className="AddComment">
      <input 
      className="commentInput"
      name="addComment"
      type="text"
      placeholder="Add a comment..."
      // onChange={this.handleInputChange}
      />
      <input type="submit" value="Add" />
    </form>
      </div>
    </div>
  );
};
export default PostContainer;
// ☞ 844fa9fb-2a20-4071-aeb5-a620a0d95ebd
