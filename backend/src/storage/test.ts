import supabase from "../lib/supabase";
import AppError from "../utils/AppError";

const testStorageConnection = async () => {
  try {
    const { error } = await supabase.storage.listBuckets();

    if (error) {
      throw error;
    }

    return "Supabase storage connected";
  } catch (error: any) {
    throw new AppError(
      `Supabase storage connection failed: ${error.message}`,
      500,
    );
  }
};

export default testStorageConnection;
