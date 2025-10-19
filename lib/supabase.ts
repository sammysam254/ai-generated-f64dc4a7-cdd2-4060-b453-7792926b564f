import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabaseSecret = process.env.NEXT_PUBLIC_SUPABASE_SECRET;

export const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);