import React, { Component } from 'react';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar'
import dummyData from '../../dummy-data'
import PostContainer from './PostContainer'


class PostsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {dummyData}
    }
  }

  allResults() {
    this.setState({
      data: {dummyData}
    })
  }

  search = (e) => {
    if (e.charCode === 13) {
    let dummyData = this.state.data.dummyData.filter(function(key) {
      return key.username == e.target.value
    })

    if (dummyData.length > 0){
      console.log(dummyData)
      this.setState({
      data: {dummyData}
    })
  } else {
    this.allResults();
  } 
  }
  }


  render() {
    return (
      <div className="App">
        <SearchBar search={this.search}/>
        <PostContainer userpost={this.state.data.dummyData} 
        a/> 
      </div>
    );
  }
}

export default PostsPage;