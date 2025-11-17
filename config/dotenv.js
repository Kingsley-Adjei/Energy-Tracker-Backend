import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const {
  NODE_ENV,
  PORT,
  SUPABASE_KEY,
  SUPABASE_PROJECT_ID,
  SUPABASE_URL,
} = process.env;
