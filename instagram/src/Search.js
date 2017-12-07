import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input 
        type='text'
        value={ props.search }
        onChange={ props.searchPosts }
        placeholder='search...'
      />
    </div>
  );
};

export default Search;