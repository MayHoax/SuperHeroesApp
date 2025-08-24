import { Link } from "react-router-dom";

export default function SuperheroCard({ hero }) {
  const hasImages = hero.images && hero.images.length > 0;
  const images = hasImages
    ? hero.images.map((img) => img.url)
    : ["https://via.placeholder.com/300x200?text=No+Image"];

  return (
    <Link
      to={`/superheroes/${hero.id}`}
      className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition relative block  "
    >
      <div className="relative">
        <img
          src={images[0]}
          alt={hero.nickname}
          className="w-full h-80  object-cover object-top "
        />
      </div>

      <div className="p-3 bg-gray-400/30">
        <h3 className="font-bold  text-xl text-center ">{hero.nickname}</h3>
      </div>
    </Link>
  );
}
