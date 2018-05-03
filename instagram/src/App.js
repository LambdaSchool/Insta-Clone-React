import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
    
  }

  render() {
    // console.log("posts: ", this.state)
    return (
      <div className="App">
        {this.state.posts.map(post => {
          // console.log(post)
          return <div key={post.username + post.likes}><PostContainer posts={post} /></div>       
        })}
      </div>
    );
  }
}




export default App;
