import AppError from "../utils/AppError";
import db from "./db";

const testDBConnection = async () => {
  try {
    await db.query(`SELECT NOW();`);

    return "Supabase DB connected";
  } catch (error: any) {
    throw new AppError(`Supabase DB connection failed: ${error.message}`, 500);
  }
};

export default testDBConnection;
