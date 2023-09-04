import { createClient } from "@supabase/supabase-js";

const url =
  import.meta.env.REACT_APP_SUPABASE_URL ??
  "https://hmexluljreaekzdfulwg.supabase.co"; //TODO: Je dois corriger ceci plus tard (HACK)
const anon =
  import.meta.env.REACT_APP_SUPABASE_ANON ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtZXhsdWxqcmVhZWt6ZGZ1bHdnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc0NDg2NSwiZXhwIjoyMDA5MzIwODY1fQ.OR-er4t1imGp0-5lG5EB9kEQ8JAHrx5U97OdM8pWeJc"; //TODO: Je dois corriger ceci plus tard (HACK)
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtZXhsdWxqcmVhZWt6ZGZ1bHdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NDQ4NjUsImV4cCI6MjAwOTMyMDg2NX0.Wf9uHWgyIODEDxRaE864U6lf8tTMVIioGewlT4CmXK0";

const supabase = createClient(url, anon);
export default supabase;
