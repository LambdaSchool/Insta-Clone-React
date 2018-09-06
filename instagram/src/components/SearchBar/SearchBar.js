import React from 'react';
import '../../index.css';
import './Search.css';

function SearchBar(props) {
  return(
    <div className="search">
      <div className="logo">
      </div>
      <form>
        <input placeholder="Search" />
      </form>
      <div className="icons">
        <div className="compass"></div>
        <div className="heart"></div>
        <div className="person"></div>
      </div>
    </div>
  )
}

export default SearchBar;