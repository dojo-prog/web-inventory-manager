import { createClient } from "@supabase/supabase-js";
import ENV from "./env";
import AppError from "../utils/AppError";

if (!ENV.SUPABASE_PROJECT_URL) {
  throw new AppError("Missing supabase project url env", 500);
}

if (!ENV.SUPABASE_ANON_KEY) {
  throw new AppError("Missing supabase anon key env", 500);
}

const supabase = createClient(ENV.SUPABASE_PROJECT_URL, ENV.SUPABASE_ANON_KEY);

export default supabase;
