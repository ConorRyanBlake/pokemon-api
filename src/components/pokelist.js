import React from "react";
import PokeCard from "./pokecard";

const pokeList = ({ pokemon }) => {
  return (
    <div className="container">
      <h3>PokeList</h3>
      <div className="row">
        {pokemon.map(({ name, types, id }) => (
          <div key={name} className="col-6 col-md-4 col-lg-3 mb-4">
            <PokeCard name={name} types={types} id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default pokeList;
