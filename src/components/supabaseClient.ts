import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = "https://monbpfsaqyqbxzoprgam.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbmJwZnNhcXlxYnh6b3ByZ2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5NTIxMTksImV4cCI6MTk5ODUyODExOX0.9UE5oXRx36uyBoYSvQFynwXJLJ_kkBHZsACJ5y_A5Go";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
