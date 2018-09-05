import React from 'react';
import './Search.css';

function SearchBar(props) {
  return(
    <div>
      <img />
      <div className="logo"></div>
      <form>
        <input placeholder="Search" />
      </form>
      <div className="compass"></div>
      <div className="heart"></div>
      <div className="person"></div>
    </div>
  )
}

export default SearchBar;