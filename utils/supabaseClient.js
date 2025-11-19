import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PROJECT_URL, SUPABASE_API_KEY } from "../config/dotenv.js";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);

export default supabase;
