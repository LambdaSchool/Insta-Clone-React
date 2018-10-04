import React, {Component} from 'react';
import logo from './ig.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Wrapper from'./SBwapper';
// import { wrap } from 'module';
// import styled from 'styled-components';

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
    this.props.filterSearch(this.state.term);
  }

  render() {
    return (
    <Wrapper>
      <div className="search-bar-container">
     
        <div className="flex-start">
        <div className="logo-container">
          <img src={logo} alt="Instagram Icon" width="30"/>
        </div>
        <h1 className="title">Instagram</h1>
        </div>
          <input onKeyDown={this.filterSearch} onChange={this.inputSearch} className="input" type="search" placeholder="search" />
         <div className="right-icons">
           <FontAwesomeIcon className="icon" icon={faKey} />
           <FontAwesomeIcon className="icon" icon={faHeart} />
           <FontAwesomeIcon className="icon" icon={faUser} />
         </div>
      </div>
    </Wrapper>
  
    )
  }
}

export default SearchBar;