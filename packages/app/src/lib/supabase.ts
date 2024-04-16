import { createClient } from '@supabase/supabase-js';
import { PUBLIC_ANON_KEY } from '$env/static/public';
import type { Database } from './supabaseTypes';

export const supabase = createClient<Database>('http://localhost:8000', PUBLIC_ANON_KEY);
