import React from "react";
import iglogo from "./iglogo.png";
import "./SearchBar.css";

const SearchBar = () => {
    return(
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
      <div className="social">
        <i className ="fab fa-instagram" ></i>
      </div>
        <img alt="instagram logo" src={iglogo} className="logo-image" />
      </div>
      <div>
        <input className="search" type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
    );
  }

  

export default SearchBar;
