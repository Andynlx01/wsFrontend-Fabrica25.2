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
    <div>
      <h2>Lista de Pokémons</h2>
      <ul>
        {pokemons.map(p => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
