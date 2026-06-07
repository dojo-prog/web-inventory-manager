import supabase from "../../lib/supabase";
import AppError from "../../utils/AppError";

const deleteImage = async (bucket: string, filePath: string): Promise<void> => {
  const { error } = await supabase.storage.from(bucket).remove([filePath]);

  if (error) {
    throw new AppError(`Image deletion failed: ${error.message}`, 500);
  }
};

export default deleteImage;
