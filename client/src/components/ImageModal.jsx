import { useState, useEffect, useRef } from "react";
import { useCallback } from "react";
export default function ImageModal({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const modalRef = useRef(null);

  const handlePrev = useCallback(
    () =>
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    []
  );
  const handleNext = useCallback(
    () =>
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
    []
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-700/80 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div ref={modalRef} className="relative p-2">
        <img
          src={images[currentIndex].url}
          alt={`Hero Image ${currentIndex + 1}`}
          className="rounded max-w-[50vw] max-h-[70vh] object-contain"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 text-xl left-2 transform -translate-y-1/2 bg-gray-300/50 rounded-full px-4 py-2 mx-1 hover:bg-white/60"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 text-xl right-2 transform -translate-y-1/2 bg-gray-300/50 rounded-full px-4 py-2 mx-1  hover:bg-white/60"
        >
          ›
        </button>
        <button
          onClick={onClose}
          className="absolute top-2  right-2 text-white bg-gray-300/50 rounded-full px-3 py-2 hover:bg-red-400/50 m-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
