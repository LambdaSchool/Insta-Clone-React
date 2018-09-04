import React from "react";

function InteractPost(props) {
  return (
    <div>
      <img src={'../../img/heart.png'} alt={'heart'}/>
      <img src={"../../img/speech-bubble.png"} alt={'bubble'}/>
      <p>{props.post.likes} likes</p>
    </div>
  )
}

export default InteractPost;