import { useState } from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (id: number) => void;
  pokemonList: Pokemon[];
}

export default function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  const [pikaMes, setpikaMes] = useState("");

  const handleClick = (pokemonName: string, id: number) => {
    setPokemonIndex(id);
    if (pokemonName === "pikachu") {
      setpikaMes("pika pikachu !!!");
    } else {
      setpikaMes("");
    }
  };

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, key) => {
          return (
            <button key={key} onClick={() => handleClick(pokemon.name, key)}>
              {pokemon.name}
            </button>
          );
        })}
      </nav>
      {pikaMes && <p>{pikaMes}</p>}
    </div>
  );
}
