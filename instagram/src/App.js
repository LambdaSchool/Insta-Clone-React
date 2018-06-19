import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar />
        </header>
        <div>
          {this.state.dummyData.map(post => (
            <PostContainer key={post.timestamp} dummyData={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
