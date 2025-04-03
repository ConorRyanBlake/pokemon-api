import React, { useEffect, useState } from "react";
import PokeList from "../components/pokelist";
import Search from "../components/search";
import Filter from "../components/filter";
import "./pokeIndex.css";

const Index = () => {
  // Main States
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [search, setSearch] = useState("");

  // Filtered States
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [gen, setGen] = useState([]);
  const [selectedGen, setSelectedGen] = useState("generation-i");

  //   Loading state
  const [isLoading, setIsLoading] = useState(true);

  console.log("DisplayedPokemon", displayedPokemon);
  console.log("Pokemon", allPokemon);

  // Search
  const searchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Selected Gen
  const genChange = (e) => {
    setSelectedGen(e.target.value);
  };

  // Selected type
  const typeChange = (e) => {
    setSelectedType(e.target.value);
  };

  // Fetch the Pokemon
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);

        // Fetch Gen
        const genResponse = await fetch("https://pokeapi.co/api/v2/generation");
        const genData = await genResponse.json();
        setGen(genData.results);

        // Fetch types
        const typeResponse = await fetch("https://pokeapi.co/api/v2/type");
        const typeData = await typeResponse.json();
        setType(typeData.results);

        // Fetch pokemon
        const pokemonResponse = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1025"
        );
        const pokemonData = await pokemonResponse.json();

        // Get detailed data of each pokemon
        const detailedPokemonPromises = pokemonData.results.map(
          async (pokemon) => {
            const detailedResponse = await fetch(pokemon.url);
            return await detailedResponse.json();
          }
        );

        const detailedPokemon = await Promise.all(detailedPokemonPromises);

        // Format the data
        const formattedPokemon = detailedPokemon.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`,
          types: pokemon.types.map((type) => type.type.name),
        }));

        setAllPokemon(formattedPokemon);
        setDisplayedPokemon(formattedPokemon);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllData();
  }, []);

  //   Apply filter
  useEffect(() => {
    if (allPokemon.length === 0) return;

    let filteredPokemon = [...allPokemon];

    // Apply type
    if (selectedType) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      );
    }

    // Apply gen
    if (selectedGen) {
      switch (selectedGen) {
        case "generation-i":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id <= 151
          );
          break;
        case "generation-ii":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id > 151 && pokemon.id <= 251
          );
          break;
        case "generation-iii":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id > 251 && pokemon.id <= 386
          );
          break;
        case "generation-iv":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id > 386 && pokemon.id <= 493
          );
          break;
        case "generation-v":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id > 493 && pokemon.id <= 649
          );
          break;
        case "generation-vi":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id > 649 && pokemon.id <= 721
          );
          break;
        case "generation-vii":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id > 721 && pokemon.id <= 809
          );
          break;
        case "generation-viii":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id > 809 && pokemon.id <= 905
          );
          break;
        case "generation-ix":
          filteredPokemon = filteredPokemon.filter(
            (pokemon) => pokemon.id > 905 && pokemon.id <= 1025
          );
          break;
        default:
          break;
      }
    }

    if (search) {
      filteredPokemon = filteredPokemon.filter(
        (pokemon) =>
          pokemon.name.includes(search) ||
          pokemon.id.toString().includes(search)
      );
    }

    setDisplayedPokemon(filteredPokemon);
  }, [selectedType, selectedGen, search, allPokemon]);

  return (
    <div>
      <div className="pokedex-container">
        <h1>Pokédex</h1>
        <div>
          <Search searchChange={searchChange} />
        </div>
        <div>
          <Filter
            typeChange={typeChange}
            type={type}
            genChange={genChange}
            gen={gen}
          />
        </div>
      </div>
      {isLoading ? (
        <div>Loading Pokémon data...</div>
      ) : (
        <div className="pokeList">
          <PokeList pokemon={displayedPokemon} />
        </div>
      )}
    </div>
  );
};

export default Index;
