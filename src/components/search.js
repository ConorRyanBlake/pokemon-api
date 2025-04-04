import React from "react";

const Search = ({ search, searchChange }) => {
  return (
    <div className="col-12">
      <div className="input-group">
        <span className="input-text-group">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="search"
          className="form-control"
          placeholder="Search Pokémon by name or ID..."
          onChange={searchChange}
          value={search}
        />
      </div>
    </div>
  );
};

export default Search;
