import { useState } from "react";
import { useSuperheroes } from "../context/SuperheroesContext";
import { useNavigate } from "react-router-dom";
import SuperheroForm from "../components/SuperheroForm";
import Spinner from "../components/UI/Spinner";
import ErrorMessage from "../components/UI/ErrorMessage";

export default function CreateSuperhero() {
  const { createSuperhero, loading } = useSuperheroes();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleCreate = async (formData) => {
    setError(null);
    try {
      await createSuperhero(formData);
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="mx-50">
      {error && <ErrorMessage message={error} />}

      {loading ? (
        <Spinner />
      ) : (
        <SuperheroForm onSubmit={handleCreate} disabled={loading} />
      )}
    </div>
  );
}
