export default function PokemonCard({ id, name, image }) {
    return (
      <div className="border rounded-lg shadow-md p-4 text-center">
        <img src={image} alt={name} className="mx-auto w-24 h-24" />
        <h2 className="text-lg font-bold capitalize">{name}</h2>
        <p>ID: #{id}</p>
      </div>
    );
  }
  