import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar Pokémon"
        className="border p-2 flex-grow"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Buscar
      </button>
    </form>
  );
}
