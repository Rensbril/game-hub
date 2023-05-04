import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = "https://spwrfqoffawvgyygkfwz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwd3JmcW9mZmF3dmd5eWdrZnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxMzcwNDQsImV4cCI6MTk5ODcxMzA0NH0.XAxFVzeJBolSvdQSVS7lzFDk6s_awELLCQMTQ7YiNJU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
