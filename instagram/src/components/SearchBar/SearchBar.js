import React from 'react';
import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput';
import SearchBarActions from './SearchBarActions';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBarContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SearchBar = ({ onChange }) => {
  return (
    <SearchBarContainer>
      <SearchBarLogo />
      <SearchBarInput onChange={onChange} />
      <SearchBarActions />
    </SearchBarContainer>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchBar;
