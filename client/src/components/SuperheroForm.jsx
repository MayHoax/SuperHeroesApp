import { useState, useEffect } from "react";
import TextInputs from "./UI/TextInputs";
import FileUploadPreview from "./UI/FileUploadPreview";
import UrlUploadPreview from "./UI/UrlUploadPreview";
import ExistingImagesPreview from "./UI/ExistingImagesPreview";
import SubmitDeleteButtons from "./UI/SubmitDeleteButtons";

export default function SuperheroForm({
  initialData,
  onSubmit,
  isEdit,
  deleteSuperhero,
}) {
  const [heroData, setHeroData] = useState({
    images: [],
    imageUrls: [],
    existingImages: [],
    imagesToDelete: [],
    imageUrlInput: "",
    nickname: "",
    realName: "",
    origin_description: "",
    superpowers: "",
    catchPhrase: "",
  });

  const [loadingFiles, setLoadingFiles] = useState(false);
  const [errorFiles, setErrorFiles] = useState("");
  const [loadingUrls, setLoadingUrls] = useState(false);
  const [errorUrls, setErrorUrls] = useState("");

  useEffect(() => {
    if (initialData) {
      setHeroData({
        nickname: initialData.nickname || "",
        realName: initialData.realName || "",
        origin_description: initialData.origin_description || "",
        superpowers: initialData.superpowers || "",
        catchPhrase: initialData.catchPhrase || "",
        images: [],
        imageUrls: [],
        existingImages: initialData.images || [],
        imagesToDelete: [],
        imageUrlInput: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) =>
    setHeroData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setHeroData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleRemoveFile = (index) =>
    setHeroData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));

  const handleRemoveExisting = (index) => {
    const deletedImage = heroData.existingImages[index];
    setHeroData((prev) => ({
      ...prev,
      existingImages: prev.existingImages.filter((_, i) => i !== index),
      imagesToDelete: [...prev.imagesToDelete, deletedImage.id],
    }));
  };

  const handleUrlInputChange = (e) =>
    setHeroData((prev) => ({ ...prev, imageUrlInput: e.target.value.trim() }));

  const handleAddUrl = () => {
    if (heroData.imageUrlInput) {
      setHeroData((prev) => ({
        ...prev,
        imageUrls: [...prev.imageUrls, prev.imageUrlInput],
        imageUrlInput: "",
      }));
    }
  };

  const handleRemoveUrl = (index) =>
    setHeroData((prev) => ({
      ...prev,
      imageUrls: prev.imageUrls.filter((_, i) => i !== index),
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("nickname", heroData.nickname);
    formData.append("realName", heroData.realName);
    formData.append("origin_description", heroData.origin_description);
    formData.append("superpowers", heroData.superpowers);
    formData.append("catchPhrase", heroData.catchPhrase);

    heroData.images.forEach((file) => formData.append("images", file));
    formData.append("imageUrls", JSON.stringify(heroData.imageUrls));
    formData.append("imagesToDelete", JSON.stringify(heroData.imagesToDelete));

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-black/15 max-w-md p-4 rounded-lg"
    >
      <h2 className="text-xl font-bold mb-3">Superhero Information</h2>

      <TextInputs heroData={heroData} handleChange={handleChange} />

      <FileUploadPreview
        files={heroData.images}
        handleFileChange={handleFileChange}
        handleRemoveFile={handleRemoveFile}
        loading={loadingFiles}
        error={errorFiles}
      />

      <UrlUploadPreview
        imageUrls={heroData.imageUrls}
        imageUrlInput={heroData.imageUrlInput}
        handleUrlInputChange={handleUrlInputChange}
        handleAddUrl={handleAddUrl}
        handleRemoveUrl={handleRemoveUrl}
        loading={loadingUrls}
        error={errorUrls}
      />

      <ExistingImagesPreview
        existingImages={heroData.existingImages}
        handleRemoveExisting={handleRemoveExisting}
      />

      <SubmitDeleteButtons
        isEdit={isEdit}
        deleteSuperhero={deleteSuperhero}
        initialData={initialData}
      />
    </form>
  );
}
