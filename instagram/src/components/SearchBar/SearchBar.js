import React, {Component} from 'react';
import logo from './ig.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    }
  }

  inputSearch = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  filterSearch = (e) => {
    e.preventDefault();
    this.props.filterSearch(this.state.term);
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="flex-start">
        <div className="logo-container">
          <img src={logo} alt="Instagram Icon" width="30"/>
        </div>
        <h1 className="title">Instagram</h1>
        </div>
        <form onSubmit={this.filterSearch}>
          <input onChange={this.inputSearch} className="input" type="search" placeholder="search" />
        </form>
         <div className="right-icons">
           <FontAwesomeIcon className="icon" icon={faKey} />
           <FontAwesomeIcon className="icon" icon={faHeart} />
           <FontAwesomeIcon className="icon" icon={faUser} />
         </div>
      </div>
    )
  }
}

export default SearchBar;