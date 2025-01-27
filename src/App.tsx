import { useEffect, useState } from "react";
import "./App.css";
import pokemonList from "./Data/Data.js";
import MyTitle from "./components/MyTitle";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer ☺");
  }, []);

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
