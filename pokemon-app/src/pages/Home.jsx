import { useEffect, useState } from "react";
import { fetchPokemons } from "../services/api";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function load() {
      const list = await fetchPokemons(20, 0);
      setPokemons(list);
    }
    load();
  }, []);

  return (
    <div className="pokemon-list">
    {pokemons.map(p => (
      <div className="pokemon-card" key={p.name}>
        <h3>{p.name}</h3>
      </div>
    ))}
  </div>
  
  );
}
