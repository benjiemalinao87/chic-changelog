
import { createClient } from '@supabase/supabase-js';

// These will be replaced with environment variables when connected to Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';

export type ChangelogEntry = {
  id?: number;
  title: string;
  content: string;
  category: string;
  release_date: string;
  released_by: string;
  dev: string;
  modified_date?: string;
  created_at?: string;
};

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch changelog entries
export const getChangelogEntries = async () => {
  try {
    const { data, error } = await supabase
      .from('changelog')
      .select('*')
      .order('release_date', { ascending: false });
    
    if (error) throw error;
    return data as ChangelogEntry[];
  } catch (error) {
    console.error('Error fetching changelog entries:', error);
    throw error;
  }
};

// Function to create a new changelog entry
export const createChangelogEntry = async (entry: ChangelogEntry) => {
  try {
    const { data, error } = await supabase
      .from('changelog')
      .insert([entry])
      .select();
    
    if (error) throw error;
    return data[0] as ChangelogEntry;
  } catch (error) {
    console.error('Error creating changelog entry:', error);
    throw error;
  }
};

// Function to retrieve a single changelog entry by id
export const getChangelogEntryById = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from('changelog')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as ChangelogEntry;
  } catch (error) {
    console.error(`Error fetching changelog entry with id ${id}:`, error);
    throw error;
  }
};
