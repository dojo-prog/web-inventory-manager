import supabase from "../../lib/supabase";
import AppError from "../../utils/AppError";

const uploadImage = async (
  file: Express.Multer.File,
  bucket: string,
  folder = "",
): Promise<{ path: string; url: string }> => {
  const ext = file.originalname.split(".").pop() ?? "";
  const baseName = file.originalname
    .replace(/\.[^/.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const fileName = `${baseName}-${Date.now()}.${ext}`;

  const filePath = folder ? `${folder}/${fileName}` : fileName;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file.buffer, {
      contentType: file.mimetype,
      upsert: false,
    });

  if (error) {
    throw new AppError(`Image upload failed: ${error.message}`, 500);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);

  return {
    path: filePath,
    url: data.publicUrl,
  };
};

export default uploadImage;
