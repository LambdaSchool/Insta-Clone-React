import React from "react";
import "./App.css";
// import PropTypes from "prop-types";
import dummyData from "./dummy-data";
import PostsPage from "./PostContainer/PostsPage";
import SearchBar from "./SearchBar/SearchBar";

console.log(dummyData);

// const  = Authenticate(SearchBar);

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleCreds={this.handleCreds} />
        {/* <HOCAuthSearch /> */}
        <PostsPage />
      </div>
    );
  }
}

export default App;

// handleChange = event => {
//   this.setStatew({[event.target.name]: event.target.value})
// }

// handleSubmit = event => {
//   event.preventDefault();
//   const authKey = `username: ${this.state.username} `
//   localStorage.setItem("credentials", `${this.state} and ${this.state.password}`)
// }
