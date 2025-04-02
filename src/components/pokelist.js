import React from "react";
import PokeCard from "./pokecard";

const pokeList = ({ pokemon }) => {
  return (
    <div className="col-md-12">
      <h3>PokeList</h3>
      <div className="container">
        <div className="row">
        {pokemon.map(({ name }) => (
          <div>
            <PokeCard name={name} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default pokeList;
