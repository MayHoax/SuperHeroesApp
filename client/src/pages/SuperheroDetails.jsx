import { useParams, Link } from "react-router-dom";
import { useSuperheroes } from "../context/SuperheroesContext";
import { useEffect, useState } from "react";
import ImageModal from "../components/ImageModal";
import Button from "../components/UI/Button";

export default function SuperheroDetails() {
  const { id } = useParams();
  const { getSuperheroById, superhero, loading, error } = useSuperheroes();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    getSuperheroById(id);
  }, [id, getSuperheroById]);

  if (loading) return <div className="text-center py-10">Загрузка...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!superhero)
    return <div className="text-center py-10">Hero not found</div>;

  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="max-w-2xl mt-16 mx-auto p-6 bg-black/20  rounded-lg ">
      <h1 className="text-3xl font-bold mb-4">{superhero.nickname}</h1>

      <p className=" mb-2">
        <strong>Real name:</strong> {superhero.realName || "Неизвестно"}
      </p>
      <p className=" mb-4">
        <strong>Origin description:</strong> {superhero.origin_description}
      </p>
      <p className="mb-4">
        <strong>Superpowers:</strong>{" "}
        {superhero.superpowers.split(", ").map((power, index) => (
          <span key={index} className="mr-2">
            {power}
          </span>
        ))}
      </p>
      <p className=" mb-4 italic">
        <strong>Catch phrase:</strong> {superhero.catchPhrase}
      </p>

      <div className="mb-4">
        <strong>Images:</strong>
        <div className="flex space-x-4 mt-2 flex-wrap">
          {superhero.images &&
            superhero.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={`${superhero.nickname} - ${index + 1}`}
                className="w-32 h-32 object-cover rounded cursor-pointer"
                onClick={() => openModal(index)}
              />
            ))}
        </div>
      </div>

      <Link to={`/edit/${superhero.id}`}>
        <Button>Edit Hero</Button>
      </Link>

      {modalOpen && (
        <ImageModal
          images={superhero.images}
          initialIndex={modalIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
