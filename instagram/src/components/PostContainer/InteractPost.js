import React from "react";

class InteractPost extends React.Component {
  constructor(props) {
    super(props);
  }

  heartClicked= event => {
    this.props.clickHeart(this.props.interactIndex);
  }

  render() {
    return (
      <div>
        <img onClick={this.heartClicked} src={require('../../img/heart.png')} alt={'heart'}/>
        <img src={require("../../img/speech-bubble.png")} alt={'bubble'}/>
        <p>{this.props.post.likes} likes</p>
      </div>
    )
  }
}

export default InteractPost;