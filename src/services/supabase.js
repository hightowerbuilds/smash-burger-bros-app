import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wdbgznlqlgimwqjhuprg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkYmd6bmxxbGdpbXdxamh1cHJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0NTgzODAsImV4cCI6MjA0MjAzNDM4MH0.nsiw_Iym-bk6Y7idR2NcHjWtU_SWxnz2ByIFxzmeeY0';
export const supabase = createClient(supabaseUrl, supabaseKey);

