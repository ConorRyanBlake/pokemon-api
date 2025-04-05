import React from "react";

const Search = ({ search, searchChange }) => {
  return (
    <div className="col-12">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text d-flex align-items-center justify-content-center px-3">
            <i className="bi bi-search"></i>
          </span>
        </div>
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
