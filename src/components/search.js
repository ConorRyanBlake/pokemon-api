import React from "react";

const Search = ({ search, searchChange }) => {
    return (
        <div>
            <h3>Search</h3>
            <input type="search" placeholder="Search" onChange={searchChange} />
        </div>
    )
}

export default Search;