import React, { Component } from "react";

import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      newSearch: "",
      filtered: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ postData: dummyData });
    }, 2000);
  }

  startSearch = event => {
    event.preventDefault();
    if (this.state.newSearch !== "") {
      let newData = dummyData;
      let filteredArr = newData.filter(
        post => post.username === this.state.newSearch
      );
      this.setState({
        postData: filteredArr,
        newSearch: "",
        filtered: true
      });
    } else {
      this.setState({
        postData: dummyData,
        newSearch: "",
        filtered: false
      });
    }
  };

  changeHandler = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.postData.length ? (
          <h2>Loading, please wait...</h2>
        ) : (
          <div>
            <SearchBar
              changeHandler={this.changeHandler}
              startSearch={this.startSearch}
              value={this.state.newSearch}
              filtered={this.state.filtered ? "filtered" : "not-filtered"}
            />
            <div className="post-container-list">
              {this.state.postData.map(user => {
                return <PostContainer key={user.timestamp} userData={user} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;