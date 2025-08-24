import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSuperheroes } from "../context/SuperheroesContext";
import SuperheroForm from "../components/SuperheroForm";
import Spinner from "../components/UI/Spinner";
import ErrorMessage from "../components/UI/ErrorMessage";

export default function EditSuperhero() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    getSuperheroById,
    superhero,
    loading,
    updateSuperhero,
    deleteSuperhero,
  } = useSuperheroes();

  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    getSuperheroById(id);
  }, [id, getSuperheroById]);

  const handleSubmit = async (formData) => {
    setLocalError(null);
    const result = await updateSuperhero(id, formData);
    if (result.success) {
      navigate(`/superheroes/${id}`);
    } else {
      setLocalError(result.error);
    }
  };

  if (loading && !superhero) {
    return <Spinner />;
  }

  if (!superhero && !loading) {
    return <ErrorMessage message="Superhero not found" />;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Superhero</h1>
      {localError && <ErrorMessage message={localError} />}
      {loading ? (
        <Spinner />
      ) : (
        <SuperheroForm
          initialData={superhero}
          onSubmit={handleSubmit}
          isEdit={true}
          deleteSuperhero={deleteSuperhero}
        />
      )}
    </div>
  );
}
