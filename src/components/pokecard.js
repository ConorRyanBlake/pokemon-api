import React from "react";
import { Card } from "react-bootstrap";

const PokeCard = ({ name }) => {
  return (
    <Card>
      <div>
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          alt={name}
          height="100px"
          className="card-image-top"
        />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h4 className="card-text">{name.types}</h4>
        </div>
      </div>
    </Card>
  );
};

export default PokeCard;
