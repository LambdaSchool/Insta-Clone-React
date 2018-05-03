import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

class SearchBar extends Component {
  render() {
    return (
      <Navbar color="faded" light>
        <NavbarBrand>
        <div className="logo">Logo</div>
        <div className="brand">Instagram</div>
        </NavbarBrand>
        <div className="searchBox">
          <div className="searchLogo"></div>
          <input name="searchInput" type="text" value=""/>
        </div>
        <div className="social">
          <div className="mapIcon"></div>
          <div className="heartIcon"></div>
        </div>
      </Navbar>
    );
  }
}

export default SearchBar;
