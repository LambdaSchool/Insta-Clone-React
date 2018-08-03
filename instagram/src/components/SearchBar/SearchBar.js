import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    margin: 20px auto;
    padding-right: 50px;
`;

const LogoHeader = styled.header`
`;

const LogoImage = styled.img`
`;

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader><LogoImage src="img/logo.png"></LogoImage></LogoHeader>
            <div><input name="search" placeholder={'\u2315 Search'} className="search-bar" type="text" onChange={props.filter} /></div>
            <div className="icons"><img src="img/search.png" alt="Explore"/>
            <img src="img/heart.png" alt="Hearts"/>
            <img src="img/profile.png" alt="Profile"/></div>
        </Header>
    );
}

export default SearchBar;
