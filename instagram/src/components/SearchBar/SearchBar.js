import React from 'react';
// import './search.css';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%
  border-bottom: 1px solid rgba(170, 170, 170, 0.637);
`;

const LogoHeader = styled.div`

`;

const LogoImage = styled.img`
  padding: 0 15px 10px;
`;

const LogoInsta = styled(LogoImage)`
  height: 46px;
  width: auto;
  border-bottom: 0;
  border-left: 1px solid rgba(170, 170, 170, 0.637);
`;

const SearchForm = styled.form`
  padding-top: 10px;
`;

const SearchInput = styled.input`
  border-radius: 2px;
  border: 1px solid rgba(170, 170, 170, 0.637);
  text-align: center;
  height: 24px;
  width: 200px;
  background-color: #ddd;

  &:focus {
    outline: none;
  }
`;

const NavHeader = styled.div `
  padding-top: 10px;
`;

const NavImage = styled.img `
  padding-left: 10px;
  height: 24px;
  width: 24px;
`;


const SearchBar = props => {
  return (
    <Header className="nav-bar">
      <LogoHeader>
        <LogoImage src={require('./../images/instagram-logo.png')}></LogoImage>
        <LogoInsta onClick={props.clearSearch} src={require('./../images/instagram-font.png')}></LogoInsta>
      </LogoHeader>
      <SearchForm onSubmit={props.search}>
        <SearchInput onChange={props.changeText} type="text" value={props.value} name="searchText" placeholder="Search"></SearchInput>
      </SearchForm>
      <NavHeader>
        <NavImage src={require('./../images/compass.png')}></NavImage>
        <NavImage src={require('./../images/favourite-heart-lrg.png')}></NavImage>
        <NavImage src={require('./../images/profile.png')}></NavImage>
      </NavHeader>
    </Header>
  )
}

export default SearchBar;