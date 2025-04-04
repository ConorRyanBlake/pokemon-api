import React, { useState } from "react";

const Filter = ({
  type,
  typeChange,
  gen,
  genChange,
  selectedType,
  selectedGen,
  clearFilters,
}) => {
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [genDropdownOpen, setGenDropdownOpen] = useState(false);
  const [typeSearch, setTypeSearch] = useState("");
  const [genSearch, setGenSearch] = useState("");

  // Filter types in dropdown
  const filteredTypes = type.filter((type) =>
    type.name.toLowerCase().includes(typeSearch.toLowerCase())
  );

  // Filter gen in dropdown
  const filteredGens = gen.filter((gen) =>
    gen.name.toLowerCase().includes(genSearch.toLowerCase())
  );

  return (
    <div className="col-12">
      <div className="d-flex gap-2 flex-wrap align-items-center">
        {/* Type dropdown */}
        <div className="dropdown" style={{ position: "relative" }}>
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            onClick={() => {
              setTypeDropdownOpen(!typeDropdownOpen);
              setGenDropdownOpen(false);
            }}
          >
            {selectedType ? `${selectedType}` : "Types"}
          </button>
          <ul
            className="dropdown-menu"
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              display: typeDropdownOpen ? "block" : "none",
              position: "absolute",
              zIndex: "1000",
            }}
          >
            <li>
              <div className="px-3 py-2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Search type"
                  value={typeSearch}
                  onChange={(e) => setTypeSearch(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            {filteredTypes.map((type) => (
              <li>
                <button
                  className="dropdown-item d-flex align-items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    typeChange({ target: { value: type.name } });
                    setTypeDropdownOpen(false);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle me-2"
                      style={{
                        backgroundColor: getTypeColor(type.name),
                        width: "12px",
                        height: "12px",
                      }}
                    />
                    {type.name.toUpperCase()}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Generation Dropdown */}
        <div className="dropdowns" style={{ position: "relative" }}>
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            onClick={() => {
              setGenDropdownOpen(!genDropdownOpen);
              setTypeDropdownOpen(false);
            }}
          >
            {selectedGen ? `${selectedGen}` : "Generation"}
          </button>
          <ul
            className="dropdown-menu"
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              display: genDropdownOpen ? "block" : "none",
              position: "absolute",
              zIndex: 1000,
            }}
          >
            <li>
              <div className="px-3 py-2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Search generation..."
                  value={genSearch}
                  onChange={(e) => setGenSearch(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            {filteredGens.map((gen) => (
              <li>
                <button
                  className="dropdown-item d-flex align-items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    genChange({ target: { value: gen.name } });
                    setGenDropdownOpen(false);
                  }}
                >
                  {gen.name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Clear Filter (conditionally displayed) */}
        {(selectedType || selectedGen !== "generation-i") && (
          <button
            className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
            onClick={() => {
              clearFilters();
              setGenDropdownOpen(false);
              setTypeDropdownOpen(false);
            }}
          >
            <i className="bi bi-x"></i>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

// Helper function to get appropriate color for each type
const getTypeColor = (typeName) => {
  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
    default: "#68A090",
  };

  return typeColors[typeName] || typeColors.default;
};

export default Filter;
