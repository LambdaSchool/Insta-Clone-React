import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import Post from "./Post";
import InteractPost from "./InteractPost";

const PostContainer = props => {
    return(
        <div>
            {props.posts.map((post, index) => {
                return (
                    <div>
                        <Post 
                            post={post}
                            key={post.timestamp}
                        />
                        <InteractPost 
                            post={post}
                            
                        />
                        <CommentSection 
                            comments={post.comments} 
                           
                            addNewComment={props.addNewComment}
                            postIndex={index}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer;