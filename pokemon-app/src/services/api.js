import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function fetchPokemons(limit = 20, offset = 0) {
  const res = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  return res.data.results;
}

export async function fetchPokemonDetails(name) {
  const res = await api.get(`pokemon/${name}`);
  return res.data;
}
