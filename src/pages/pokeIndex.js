import React, { useEffect, useState } from "react";
import PokeList from "../components/pokelist";
import Search from "../components/search";
import Filter from "../components/filter";
import "./pokeIndex.css";

const Index = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedGen, setSelectedGen] = useState("");

  console.log("Current Pokémon State:", pokemon);


  const Generations = [
    {
      name: "Gen-1",
      value: "151",
    },
    {
      name: "Gen-2",
      value: "100",
    },
    {
      name: "Gen-3",
      value: "135",
    },
  ];

  // Selected Gen
  const genChange = (e) => {
    setSelectedGen(e.target.value);
  };

  // Selected type
  const typeChange = (e) => {
    setSelectedType(e.target.value);
  };

  // Fetch the types
  useEffect(() => {
    const fetchType = async () => {
      const apiUrl = "https://pokeapi.co/api/v2/type";

      const response = await fetch(apiUrl);
      const data = await response.json();
      setType(data.results);
    };
    fetchType();
  }, []);

  // Search
  const searchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Fetch the pokemon
  useEffect(() => {
    const fetchPokemon = async () => {
      // If Type is selected
      if (selectedType) {
        const apiUrl = `https://pokeapi.co/api/v2/type/${selectedType}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setPokemon(data.pokemon.map((p) => p.pokemon));
      } 
      else if (selectedGen) {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1302";

        const response = await fetch(apiUrl);
        const data = await response.json();

        const pokeDexId = pokemon.url

        const genPokemon = data.pokemon.filter((p) => {
          const id = parseInt(p.url.split("/").slice(-2, -1)[0]);
          return id <= 151
      })

        setPokemon(genPokemon);
      }
      // else if (selectedGen && selectedType) {
      //   const apiUrl = `https://pokeapi.co/api/v2/type/${selectedType}`;

      //   const response = await fetch(apiUrl);
      //   const data = await response.json();

      //   const genPokemon = data.pokemon.map((p) => p.pokemon).filter(selectedGen >= pokemon.id)

      //   setPokemon(genPokemon);

      // } 
      else {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1302";

        const response = await fetch(apiUrl);
        const data = await response.json();


        setPokemon(data.results);
      }
    };
    fetchPokemon();
  }, [selectedType, selectedGen ]);

  // Filter the pokemon on search
  const searchedPokemon = pokemon.filter((pokemon) =>
    pokemon.name.includes(search)
  );

  return (
    <div>
      <h1>Index</h1>
      <div>
        <Search searchChange={searchChange} />
      </div>
      <div>
        <Filter typeChange={typeChange} type={type} genChange={genChange} gen={Generations} />
      </div>
      <div className="pokeList">
        <PokeList pokemon={searchedPokemon} />
      </div>
    </div>
  );
};

export default Index;
