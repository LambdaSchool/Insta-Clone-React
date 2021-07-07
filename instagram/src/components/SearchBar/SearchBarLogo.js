import React from 'react';
import instaLogo from './Instagram_logo.png';

import styled from 'styled-components';

const SearchBarLogoHeader = styled.header`
  align-items: center;
  display: flex;

  i {
    font-size: 62px;
  }

  img {
    height: 80px;
    margin-top: 10px;
  }
`;

const SearchBarVerticalLine = styled.div`
  border-left: 1px solid black;
  height: 62px;
  margin: 0 20px;
`;

const SearchBarLogo = () => {
  return (
    <SearchBarLogoHeader>
      <i className="fab fa-instagram" />
      <SearchBarVerticalLine />
      <img alt="logo" src={instaLogo} />
    </SearchBarLogoHeader>
  );
}

export default SearchBarLogo;
