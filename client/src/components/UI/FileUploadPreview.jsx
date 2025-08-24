import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FileUploadPreview({
  files,
  handleFileChange,
  handleRemoveFile,
  loading,
  error,
}) {
  return (
    <>
      <label className="mt-2">Image (file)</label>
      <input
        multiple
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="p-2 border rounded w-full"
      />
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {files.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-2">
          {files.map((file, idx) => (
            <div key={idx} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-24 h-24 object-cover rounded border"
              />
              <button
                type="button"
                onClick={() => handleRemoveFile(idx)}
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
