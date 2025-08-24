import Button from "./UI/Button";

export default function Pagination({ page, pages, onPageChange }) {
  if (pages <= 1) return null;

  const prev = () => onPageChange(Math.max(1, page - 1));
  const next = () => onPageChange(Math.min(pages, page + 1));

  return (
    <div className="flex items-center gap-2 justify-center mt-6">
      <Button onClick={prev} disabled={page === 1}>
        Prev
      </Button>

      <span className="text-sm text-white/80">
        Page {page} / {pages}
      </span>
      <Button onClick={next} disabled={page === pages}>
        Next
      </Button>
    </div>
  );
}
