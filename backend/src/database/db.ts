import { Pool } from "pg";
import ENV from "../lib/env";

const db = new Pool({
  connectionString: ENV.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;
