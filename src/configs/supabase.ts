import { createClient } from "@supabase/supabase-js";
import { isLocal } from "./github";

const getSupabaseUrl = () => {
  if (isLocal()) {
    return import.meta.env.VITE_SUPABASE_URL;
  }
  return import.meta.env.SUPABASE_URL;
};

const getSupabaseAnonKey = () => {
  if (isLocal()) {
    return import.meta.env.VITE_SUPABASE_ANON;
  }
  return import.meta.env.SUPABASE_ANON;
};

const url = getSupabaseUrl() ?? "";
export const anon = getSupabaseAnonKey() ?? "";

const supabase = createClient(url, anon);
export default supabase;
