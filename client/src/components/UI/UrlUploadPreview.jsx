import Button from "./Button";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function UrlUploadPreview({
  imageUrls,
  imageUrlInput,
  handleUrlInputChange,
  handleAddUrl,
  handleRemoveUrl,
  loading,
  error,
}) {
  return (
    <>
      <span className="text-center my-2">— OR —</span>
      <label>Image (URL)</label>
      <input
        type="url"
        value={imageUrlInput}
        onChange={handleUrlInputChange}
        placeholder="https://..."
        className="p-2 border rounded mb-2 w-full"
      />
      <Button type="button" onClick={handleAddUrl}>
        Add image link
      </Button>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {imageUrls.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-2">
          {imageUrls.map((url, idx) => (
            <div key={idx} className="relative">
              <img
                src={url}
                alt="preview"
                className="w-24 h-24 object-cover rounded border"
              />
              <button
                type="button"
                onClick={() => handleRemoveUrl(idx)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
