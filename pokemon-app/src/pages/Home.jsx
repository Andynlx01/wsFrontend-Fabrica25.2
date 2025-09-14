import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();

        // Agora buscamos os detalhes de cada Pokémon (pra ter ID e imagem)
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Erro ao buscar pokémons:", error);
      }
    }

    fetchPokemons();
  }, []);

  return (
    <div>
      <div className="pokemon-list">
        {pokemons.map((p) => (
          <div className="pokemon-card" key={p.id}>
            <img src={p.sprites.front_default} alt={p.name} />
            <h3>{p.name}</h3>
            <p>ID: #{p.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
