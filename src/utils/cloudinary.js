import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Cloudinary automatically reads CLOUDINARY_URL
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    return response;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    console.error("Cloudinary upload error:", error.message);
    return null;
  }
};

export { uploadOnCloudinary };
export default cloudinary;
