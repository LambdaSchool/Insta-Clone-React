import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from './components/PostContainer/PostContainer';

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

  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.data} addNewComment={this.addNewComment} />
      </div>
    );
  }
}

export default App;
