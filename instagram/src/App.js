import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      loggedIn: false,
      comment: ''
    };

    this.likeIncrement = this.likeIncrement.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    this.setState({data: dummyData});
    let username = localStorage.getItem('username');
    console.log(username);
    if (username) {
      this.setState(function() {
        return {loggedIn: true}
      });
    }
  } 

  likeIncrement(index, event) {
    event.stopPropagation();
    if (this.state.data[index].liked === false) {
      this.setState((prevState, props) => {
        return {[this.state.data[index].likes]: [prevState.data[index].likes++]}
      });
      let arr = this.state.data.slice();
      arr.map(((el, i) => {if(i === index) return el.liked = !(el.liked)}))
    } else {
      this.setState((prevState, props) => {
        return {[this.state.data[index].likes]: [prevState.data[index].likes--]}
      });
      let arr = this.state.data.slice();
      arr.map(((el, i) => {if(i === index) return el.liked = !(el.liked)}))
    }

  }

  filterData(event) {
    if(event.target.value === '') {
      this.setState({data: dummyData})
    } else {
      this.setState({filteredData: this.state.data.filter(item => item.username.includes(event.target.value))})
      this.setState(function(prevState, props){
        return {data: prevState.filteredData}
      })
    }
  }

  handleLogin = (user) => {
    console.log('should be logged in');
    localStorage.setItem('username', user);
  }
  
  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  clearComment = () => {
    this.setState({comment: ''})
  }

  render() {
    
    if (this.state.loggedIn === true) {
      return (
        <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={props => (<PostsPage data={this.state.data} filter={this.filterData} like={this.likeIncrement} input={this.handleInputChange} comment={this.state.comment} clear={this.clearComment} />)} />
            <Route path="/:number" render={props => (<PostsPage data={this.state.data.slice(parseInt(props.match.params.number, 10), parseInt(props.match.params.number, 10)+1)} filter={this.filterData} like={this.likeIncrement} input={this.handleInputChange} comment={this.state.comment} clear={this.clearComment} />)} />
          </Switch>
        </Router>
        </div>
      );
    } else {
      return (
          <AuthenticatedApp handleLogin={this.handleLogin} />
      );
    }
  }
}

const AuthenticatedApp = Authenticate(App);

export default App;
