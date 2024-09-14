
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jhhfoasbqicxaymbxfhm.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoaGZvYXNicWljeGF5bWJ4ZmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMzE3MDYsImV4cCI6MjA0MDYwNzcwNn0.NOovfVajT1RXXN73FGD9Ou6iZa5KUPIeW-GksN9Y9G0";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;