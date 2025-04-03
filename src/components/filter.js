import React from "react";

const Filter = ({ type, typeChange, gen, genChange }) => {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <button className="filter-dropdown" id="type-dropdown">
          Type <i className="bi bi-chevron-down"></i>
          <select name="type" id="type" onChange={typeChange}>
            <option value="">All</option>
            {type.map((type) => (
              <option value={type.name}>{type.name}</option>
            ))}
          </select>
        </button>
        
        <div>
          
        </div>
      </div>
      <div className="filter-group">
        <button className="filter-dropdown" id="type-dropdown">
          Generation <i className="bi bi-chevron-down"></i>
          <div>
          <select name="gen" id="gen" onChange={genChange}>
            {gen.map((gen) => (
              <option value={gen.name}>{gen.name.toUpperCase()}</option>
            ))}
          </select>
        </div>
        </button>
        
      </div>
    </div>
  );
};

export default Filter;
