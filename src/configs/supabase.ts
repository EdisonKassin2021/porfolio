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

const url = getSupabaseUrl() ?? "https://hmexluljreaekzdfulwg.supabase.co";
export const anon =
  getSupabaseAnonKey() ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtZXhsdWxqcmVhZWt6ZGZ1bHdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NDQ4NjUsImV4cCI6MjAwOTMyMDg2NX0.Wf9uHWgyIODEDxRaE864U6lf8tTMVIioGewlT4CmXK0";

const supabase = createClient(url, anon);
export default supabase;
