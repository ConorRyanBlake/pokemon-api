import React from "react";
import { Card } from "react-bootstrap";

// Import all type icons here at the top of the file
// This is a more reliable way to handle image imports in React
// You'll need to adjust the actual paths to match your project structure
const typeIcons = {
  normal: require("../assets/type-icons/normal.png"),
  fighting: require("../assets/type-icons/fighting.png"),
  flying: require("../assets/type-icons/flying.png"),
  poison: require("../assets/type-icons/poison.png"),
  ground: require("../assets/type-icons/ground.png"),
  rock: require("../assets/type-icons/rock.png"),
  bug: require("../assets/type-icons/bug.png"),
  ghost: require("../assets/type-icons/ghost.png"),
  steel: require("../assets/type-icons/steel.png"),
  fire: require("../assets/type-icons/fire.png"),
  water: require("../assets/type-icons/water.png"),
  grass: require("../assets/type-icons/grass.png"),
  electric: require("../assets/type-icons/electric.png"),
  psychic: require("../assets/type-icons/psychic.png"),
  ice: require("../assets/type-icons/ice.png"),
  dragon: require("../assets/type-icons/dragon.png"),
  dark: require("../assets/type-icons/dark.png"),
  fairy: require("../assets/type-icons/fairy.png"),
};

const PokeCard = ({ name, types, id }) => {
  // Updated color scheme to better match official Pokémon type colors
  const typeColor = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",   
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
    stellar: "#7752CC",
    unknown: "#68A090",
  };

  return (
    <div className="text-center shadow-sm">
      <Card className="position-relative">
        {/* ID positioned at top left */}
        <span className="position-absolute top-0 start-0 m-2 badge bg-light text-dark">#{id}</span>
        
        <div className="poke-img-container">
          <Card.Img
            variant="top"
            src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
            alt={name}
            className="pokecard-img"
          />
        </div>
        
        <Card.Body>
          <Card.Title className="mb-3">{name.toUpperCase()}</Card.Title>
          
          {/* Types displayed horizontally with properly imported image icons */}
          <div className="d-flex justify-content-center gap-2">
            {types.map((type) => (
              <div
                key={type}
                className="d-flex align-items-center px-3 py-1 rounded"
                style={{ 
                  background: typeColor[type],
                  color: "white"
                }}
              >
                <img 
                  src={typeIcons[type]} 
                  alt={type} 
                  className="me-2" 
                  style={{ width: "20px", height: "20px" }} 
                />
                <span>{type.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokeCard;