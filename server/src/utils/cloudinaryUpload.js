import cloudinary from "../config/cloudinary.js";

export async function uploadBufferToCloudinary(buffer, folder = "superheroes") {
  try {
    return await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder },
        (err, res) => {
          if (err) return reject(err);
          resolve(res);
        }
      );
      stream.end(buffer);
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
}
