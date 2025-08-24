import { useEffect, useState } from "react";
import { useSuperheroes } from "../context/SuperheroesContext";
import SuperheroCard from "../components/SuperheroCard";
import Pagination from "../components/Pagination";
import Spinner from "../components/UI/Spinner";
import ErrorMessage from "../components/UI/ErrorMessage";

export default function Home() {
  const { superheroes, page, pages, loading, error, getSuperheroes } =
    useSuperheroes();

  const [localPage, setLocalPage] = useState(page || 1);

  useEffect(() => {
    getSuperheroes(localPage, 5);
  }, [localPage, getSuperheroes]);

  return (
    <div className="p-2 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">List of Superheroes</h1>

      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {superheroes && superheroes.length > 0
          ? superheroes.map((hero) => (
              <SuperheroCard key={hero.id} hero={hero} />
            ))
          : !loading && <p>No superheroes found.</p>}
      </div>

      {pages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination
            page={localPage}
            pages={pages}
            onPageChange={setLocalPage}
          />
        </div>
      )}
    </div>
  );
}
