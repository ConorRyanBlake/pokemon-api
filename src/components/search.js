import React from "react";

const Search = ({ search, searchChange }) => {
  return (
    <div className="seach-container">
      <div className="search-wrapper">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={searchChange}
        />
      </div>
    </div>
  );
};

export default Search;
