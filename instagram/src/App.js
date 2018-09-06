import React, { Component } from 'react';

import './App.css';
import dummyData from "./dummy-data";

import PostPage from "./components/PostContainer/PostPage"
import Authenticate from "./components/Authentication/Authenticate";


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }

  addNewComment = (inputComment, postIndex) => {
    const nextData = [...this.state.data];
    nextData[postIndex].comments.push(inputComment);
    this.setState({data: nextData});
  }

  clickHeart = (interactIndex) => {
    const newData = [...this.state.data];
    const updateData = newData.map((data, index) => {
      if(index === interactIndex) {
        data.likes += 1;
      }
      return data;
    })
    this.setState({data: updateData});
  }

 

  render() {

    return (
      <div className="App">
        <PostPage 
          data={this.state.data}
          addNewComment={this.addNewComment} 
          clickHeart={this.clickHeart}
        />
      </div>
    );
  }
}

export default Authenticate(App);


