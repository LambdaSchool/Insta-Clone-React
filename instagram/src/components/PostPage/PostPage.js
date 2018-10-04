import React from 'react';
import dummy_data from '../../dummy-data';
import uuidv4 from 'uuid/v4';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from  '../PostContainer/PostContainer';
import './PostPage.css';

class PostPage extends React.Component {
  constructor() {
    super();

    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummy_data
    })
  }

  filterSearch = (term) => {
    this.setState({
      dummyData: dummy_data.filter(post => post.username.includes(term))
    })
  }

  logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    const {dummyData} = this.state;
    return (
      <div className="App">
        <button className="logout-button" onClick={this.logout}>Logout</button>
        <SearchBar filterSearch={this.filterSearch} />
        {
          dummyData.map(post => {
            return (
              <PostContainer key={uuidv4()} postData={post} />
            )
          })
        }
      </div>
    );
  }
}

export default PostPage;