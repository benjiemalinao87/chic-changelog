
import { createClient } from '@supabase/supabase-js';

// These would be replaced with actual environment variables when connected to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://example.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'your-supabase-key';

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

// Sample mock data to use when not connected to Supabase
const mockEntries: ChangelogEntry[] = [
  {
    id: 1,
    title: "Version 2.0.0 Released",
    content: "**Key Highlights:**\n\n- Completely redesigned UI for better user experience\n- Added dark mode support\n- Performance improvements across the board\n- Fixed several critical bugs",
    category: "feature",
    release_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    released_by: "Dev Team",
    dev: "Frontend Team",
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    title: "Bug Fix Release",
    content: "**Key Highlights:**\n\n- Fixed authentication issues\n- Resolved data loading problems\n- Improved error handling",
    category: "fix",
    release_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    released_by: "Maintenance Team",
    dev: "Backend Team",
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 3,
    title: "Performance Optimization",
    content: "**Key Highlights:**\n\n- Reduced load times by 40%\n- Optimized database queries\n- Improved API response times\n- Added request caching",
    category: "performance",
    release_date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    released_by: "Performance Team",
    dev: "Full Stack Team",
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Validate Supabase URL to avoid "Invalid URL" errors
const isValidUrl = (urlString: string): boolean => {
  try {
    new URL(urlString);
    return true;
  } catch (e) {
    return false;
  }
};

// Check if we can connect to Supabase
const isSupabaseConfigured = 
  isValidUrl(supabaseUrl) && 
  supabaseUrl !== 'https://example.supabase.co' && 
  supabaseKey !== 'your-supabase-key';

// Initialize the Supabase client or use mock data
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Function to fetch changelog entries
export const getChangelogEntries = async () => {
  try {
    // If Supabase is configured, fetch real data
    if (supabase) {
      const { data, error } = await supabase
        .from('changelog')
        .select('*')
        .order('release_date', { ascending: false });
      
      if (error) throw error;
      return data as ChangelogEntry[];
    } 
    
    // Otherwise, use mock data
    console.log('Using mock changelog data (Supabase not configured)');
    return mockEntries;
  } catch (error) {
    console.error('Error fetching changelog entries:', error);
    // Return mock data as fallback
    return mockEntries;
  }
};

// Function to create a new changelog entry
export const createChangelogEntry = async (entry: ChangelogEntry) => {
  try {
    // If Supabase is configured, add to real database
    if (supabase) {
      const { data, error } = await supabase
        .from('changelog')
        .insert([entry])
        .select();
      
      if (error) throw error;
      return data[0] as ChangelogEntry;
    }
    
    // Otherwise, simulate adding to mock data
    console.log('Adding to mock changelog data (Supabase not configured)');
    const newEntry = {
      ...entry,
      id: mockEntries.length + 1,
      created_at: new Date().toISOString()
    };
    mockEntries.unshift(newEntry);
    return newEntry;
  } catch (error) {
    console.error('Error creating changelog entry:', error);
    throw error;
  }
};

// Function to retrieve a single changelog entry by id
export const getChangelogEntryById = async (id: number) => {
  try {
    // If Supabase is configured, fetch from real database
    if (supabase) {
      const { data, error } = await supabase
        .from('changelog')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data as ChangelogEntry;
    }
    
    // Otherwise, fetch from mock data
    console.log('Fetching from mock changelog data (Supabase not configured)');
    const entry = mockEntries.find(e => e.id === id);
    if (!entry) throw new Error(`Entry with id ${id} not found`);
    return entry;
  } catch (error) {
    console.error(`Error fetching changelog entry with id ${id}:`, error);
    throw error;
  }
};
