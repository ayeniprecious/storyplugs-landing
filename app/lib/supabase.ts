import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Lazy on purpose -- Next.js briefly evaluates client component modules
// server-side while prerendering the page shell, even ones that only ever
// run in the browser. Constructing the client at module scope meant a
// missing env var threw during that prerender pass and failed the whole
// build. Deferring construction to first actual use (inside a click
// handler, never during prerendering) keeps a misconfigured env from being
// able to break the build at all -- it can only fail the button click.
let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!client) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
    }
    client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return client;
}
