import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './Dummy'
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authentication/Authenticate';
import PropTypes from 'prop-types';
import Login from './components/Login/Login';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data : [],
      search: '',
      
    }
  }
  componentDidMount(){
    this.setState({
      data: dummyData 
    })
  }
  searchFilter = (event) => {
    event.preventDefault()
    const search = this.state.search
    const data = this.state.data.filter(post =>{
      return post.username.includes(search) 
    })
    console.log(search)
    search === '' ? this.setState({data: dummyData}) : this.setState({data:data})
  }
  searchChanger = (event) =>{
    this.setState({
      search: event.target.value,
    })
    console.log(event.target.value)
  }
  
  
  render() {
    
    const App = () =>{
      return (
        <div>
         
          <PostPage data = {this.state.data} changer = {this.searchChanger} search = {this.searchFilter} searchValue = {this.state.search}/>
        </div>
      );
    }
    
    const HOComponent = Authenticate(App);
      return(
       <HOComponent />

    )
  }  
}



App.propTypes = {
  dummyData : PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl:PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments:PropTypes.arrayOf(
        PropTypes.shape({
          username:PropTypes.string,
          text: PropTypes.string,
        })
      )
    }).isRequired
  )
}

export default Authenticate(App)
