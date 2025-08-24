export default function ExistingImagesPreview({
  existingImages,
  handleRemoveExisting,
}) {
  if (!existingImages.length) return null;

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {existingImages.map((img, idx) => (
        <div key={img.id || idx} className="relative">
          <img
            src={img.url}
            alt="preview"
            className="w-24 h-24 object-cover rounded border"
          />
          <button
            type="button"
            onClick={() => handleRemoveExisting(idx)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
