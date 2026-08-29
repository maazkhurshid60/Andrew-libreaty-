import { createClient } from "@supabase/supabase-js";

// Shared Supabase project (see D:\Client\sade\supabase-shared). Every row
// this app writes is tagged with SITE so it stays scoped to Andrew's data
// even though Stefanie Pollack's site shares the same project/auth pool.
export const SITE = "andrew-liberty" as const;

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
