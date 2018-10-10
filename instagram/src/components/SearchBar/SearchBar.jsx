import React from "react";
import "./searchbar.css";

const SearchBar = props => {
  return (
    <div className="row search-bar d-flex justify-content-start align-items-center">
      <i className="fab fa-instagram col-1 insta-icon" />
      {/* <img
        className="instagram-logo"
        src="https://cdn.iphoneincanada.ca/wp-content/uploads/2017/06/Instagram_logo.svg_.png"
        alt=""
      /> */}
      <form className="col-8">
        <input
          placeholder="search"
          type="text"
          onChange={props.onChange}
          name="input"
          value={props.input}
        />
      </form>
    </div>
  );
};

export default SearchBar;
