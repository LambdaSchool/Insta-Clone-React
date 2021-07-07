import React from 'react';
import styled from 'styled-components';

const SearchBarActionIcons = styled.div`
  align-items: center;
  display: flex;
  font-size: 25px;

  i {
    margin-left: 20px;
  }
`;

const SearchBarActions = () => {
  return (
    <SearchBarActionIcons>
      <i className="far fa-compass" />
      <i className="far fa-heart" />
      <i className="far fa-user" />
    </SearchBarActionIcons>
  );
}

export default SearchBarActions;
