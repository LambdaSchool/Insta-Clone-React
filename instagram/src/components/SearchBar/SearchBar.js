import React from 'react';
import './SearchBar.css';


  const SearchBar = props => {

    return (
      <div className="nav-container">
        <div className="nav">
                <div className="navtitle">
                  <img className="logo" src="https://image.ibb.co/jOzNHy/insta.png" alt="logo"/>
              </div>
              <div className="search">
                <form>
                  <input type="text" placeholder="Search" onKeyDown={props.searchPosts}/>
                </form>
              </div>
              <div className="links">
                <img src="https://image.ibb.co/kpcTPd/logo.png" alt="1"/>
                <img src="https://image.ibb.co/cpSTPd/explorelink.png" alt="2"/>
                <img src="https://image.ibb.co/iArYqJ/profilelink.png" alt="3"/>
              </div>
            </div>
      </div>
    );
  }

export default SearchBar;
