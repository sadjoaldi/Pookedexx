interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

export default function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, key) => {
          return (
            <button key={key} onClick={() => setPokemonIndex(key)}>
              {pokemon.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
