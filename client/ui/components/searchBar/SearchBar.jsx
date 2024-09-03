import React from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      onSearch();
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Search tickets..."
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
    />
  );
};

export default SearchBar;