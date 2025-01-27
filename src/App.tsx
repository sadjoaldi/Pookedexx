import { useState } from "react";
import "./App.css";
import MyTitle from "./components/MyTitle";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <>
      <MyTitle />
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      <PokemonCard
        name={pokemonList[pokemonIndex]}
        imgSrc={pokemonList[pokemonIndex]}
      />
    </>
  );
}

export default App;
