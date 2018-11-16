import React from "react";
import logo from "../Images/instagramScript.svg";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1.4rem;
  align-items: center;
`;

const SearchBar = styled.input`
  font-family: "Font Awesome 5 Free", "Open Sans", sans-serif;
  text-align: center;
  width: 12rem;
  font-size: 0.8rem;
  padding: 0.2rem 0;
  margin-left: 5rem;
`;

const LeftContainer = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 6.5rem;
  position: absolute;
  margin-left: 1.1rem;
  top: 13px;
  cursor: pointer;
`;

const Icon = styled.i`
  cursor: pointer;
  font-size: 1.3rem;
  padding-top: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:not(:first-child) {
    padding-left: 2.2rem;
  }

  &:hover {
    color: red;
  }

  &.fa-instagram {
    font-size: 2rem;
    margin-left: -0.5rem;
    padding-right: 1.4rem;
    border-right: 0.1rem solid black;
  }
`;

const SearchBarContainer = props => {
  return (
    <Header>
      <Container>
        <LeftContainer>
          <Icon className="fab fa-instagram" />
          <Logo src={logo} alt="instagram script logo" />
        </LeftContainer>
        <div>
          <SearchBar
            name="search"
            type="text"
            onChange={props.searchPosts}
            className="fa fa-input"
            placeholder="&#xf002; Search"
          />
        </div>
        <div>
          <Icon className="far fa-compass" />
          <Icon className="far fa-heart" />
          <Icon className="far fa-user" onClick={props.logout} />
        </div>
      </Container>
    </Header>
  );
};

export default SearchBarContainer;
