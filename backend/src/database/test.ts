import db from "./db";

const testDBConnection = async () => {
  try {
    await db.query(`SELECT NOW();`);

    return "Supabase DB connected";
  } catch (error) {
    // TODO apply error handler
  }
};

export default testDBConnection;
