import React, { Component } from 'react';
// generates random name from the 1990s census (not sure which country, though... https://www.npmjs.com/package/node-random-name)
import random_name from 'node-random-name';
import './AddComment.css';

export default class AddComment extends Component {
  
  constructor() {
    super();
    this.state = {
      inputText: ''
    }
    this.inputRef = React.createRef();
  }

  input = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state.inputText);
  }

  addComment = (e) => {
    e.preventDefault();
    this.props.addComment({username: random_name(), text: this.state.inputText});
    this.setState({inputText: ''});
    console.log('INPUT REF', this.inputRef.current.value = '');
  }

  render() {
    return (
      <form onSubmit={this.addComment} className="add-comment-container">
        <input ref={this.inputRef} name="inputText" onChange={this.input} className="inputComment" type="text" placeholder="Type comment here..." />
      </form>
    )
  }
}