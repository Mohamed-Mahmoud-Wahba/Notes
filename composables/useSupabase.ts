import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rvcjegznykysqemwowlf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2Y2plZ3pueWt5c3FlbXdvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwODAwMTEsImV4cCI6MTk4ODY1NjAxMX0.hTBGkI5vT6u5kgD1wo-42EPhSW_97u7ga8dOUQrMx_M"

const useSupabase = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);

  return {
    supabase,
  };
};

export default useSupabase;
