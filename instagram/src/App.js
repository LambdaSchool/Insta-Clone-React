import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      searchValue: '',
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: window.localStorage.length === 0 ? dummyData : JSON.parse(window.localStorage.getItem('data'))
    });
  }

  submitComment = (timestamp, comment) => {
    const commentMatch = this.state.data[this.state.data.map((obj, i) => obj.timestamp === timestamp && i).filter(arr => arr !== false).pop()];

    commentMatch.comments.push(comment);

    window.localStorage.setItem('data', JSON.stringify(this.state.data))
  }

  search = e => {
    this.setState({ [e.target.name]: e.target.value });

    const search = this.state.data.filter(post => post.username.toLowerCase().includes((e.target.value).toLowerCase()) || post.comments.map(comm => comm.text.toLowerCase().includes((e.target.value).toLowerCase()) || comm.username.toLowerCase().includes((e.target.value).toLowerCase())) === true);

    search.length !== 0 && this.setState({ data: search });

    if (e.target.value.length === 0) {
      this.setState({ data: dummyData });
    }
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div className="App">
          <header>
            <i className='fab fa-instagram' />
            <i className='headName'>Instagram</i>
            <SearchBar
              search={this.search}
              searchValue={this.state.searchValue}
            />
            <div>
              <i className='far fa-compass' />
              <i className='far fa-heart' />
              <i className='far fa-user' />
            </div>
          </header>
          <Loader type="Triangle" color="darkgreen" height={80} width={80} />
        </div>
      )
    } else {
      return (
        <div className="App">
          <header>
            <i className='fab fa-instagram' />
            <i className='headName'>Instagram</i>
            <SearchBar
              search={this.search}
              searchValue={this.state.searchValue}
            />
            <div>
              <i className='far fa-compass' />
              <i className='far fa-heart' />
              <i className='far fa-user' />
            </div>
          </header>
          {this.state.data.map(post => (
            <PostContainer
              post={post}
              key={post.timestamp}
              liker={this.liker}
              liked={this.state.liked}
              submitComment={this.submitComment}
              deleteComment={this.deleteComment}
            />
          ))}
        </div>
      );
    }
  }
}

export default App;
