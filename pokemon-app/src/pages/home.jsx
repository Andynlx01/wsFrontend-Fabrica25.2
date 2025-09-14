import { useEffect, useState } from "react";
import { fetchPokemons, fetchPokemonDetails } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function load() {
      const list = await fetchPokemons(50, 0); 
      const details = await Promise.all(
        list.map(p => fetchPokemonDetails(p.name))
      );
      setPokemons(details);
      setFiltered(details);
    }
    load();
  }, []);

  function handleSearch(query) {
    const q = query.toLowerCase();
    const results = pokemons.filter(p => p.name.includes(q));
    setFiltered(results);
  }

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filtered.map(p => (
          <PokemonCard
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.sprites.front_default}
          />
        ))}
      </div>
    </div>
  );
}
