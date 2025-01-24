import { useState } from "react";
import "./App.css";
import MyTitle from "./components/MyTitle";
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

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handleClickPrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  console.log(pokemonIndex);

  return (
    <>
      <MyTitle />
      <PokemonCard
        name={pokemonList[pokemonIndex]}
        imgSrc={pokemonList[pokemonIndex]}
      />
      <button onClick={handleClickPrev} disabled={pokemonIndex === 0}>
        Prev
      </button>
      <button
        onClick={handleClickNext}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Next
      </button>
    </>
  );
}

export default App;
