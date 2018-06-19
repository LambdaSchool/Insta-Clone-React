import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchContainer from './components/SearchBar/SearchContainer';
import PostList from './components/PostContainer/PostList';
class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      username: '',

    };
  }
  changeComment = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  addComment = (e, index) => {

    let comment = e.target.value;
    if(comment === '') {
      return;
    }
    //If the state comment property does not exist then create a new one
    const state = Object.assign({}, this.state);

    if(state[`comment${index}`] === undefined) {
      state[`comment${index}`] = '';
    }
    console.log(state);
    let instaData = Object.assign({}, this.state.instaData[index]);
    instaData.comments.push({username: 'skid', text: comment});
    e.target.value = '';

    this.setState({});
  }
  render() {
    return (
      <div className="App">
        <SearchContainer />
        <PostList instaData = {this.state.instaData}
        changeCommentHandler = {this.changeComment}
        addCommentHandler = {this.addComment}/>
      </div>
    );
  }
}

export default App;
