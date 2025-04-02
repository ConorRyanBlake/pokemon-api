import React from "react";

const Filter = ({ type, typeChange, gen, genChange }) => {
  return (
    <div>
      <h3>Filter</h3>
      <div>
        <h4>Type</h4>
        <div>
          <select name="type" id="type" onChange={typeChange}>
            <option value="">All</option>
            {type.map((type) => (
              <option value={type.name}>{type.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <h4>Generation</h4>
        <div>
          <select name="gen" id="gen" onChange={genChange}>
            <option value="">1</option>
            {gen.map((gen) => (
              <option value={gen.name}>{gen.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
