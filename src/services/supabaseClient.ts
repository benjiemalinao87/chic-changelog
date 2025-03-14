import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export type ChangelogEntry = {
  id?: number;
  title: string;
  content: string;
  category: string;
  release_date: string;
  released_by: string;
  dev: string;
  lessons_learned?: string;
  modified_date?: string;
  created_at?: string;
};

// Function to fetch changelog entries
export const getChangelogEntries = async () => {
  try {
    const { data, error } = await supabase
      .from('changelog')
      .select('*')
      .order('release_date', { ascending: false });
    
    if (error) {
      console.error('Error fetching entries:', error);
      toast.error('Failed to fetch entries', {
        description: error.message
      });
      throw error;
    }
    
    return data as ChangelogEntry[];
  } catch (error) {
    console.error('Error fetching changelog entries:', error);
    toast.error('Error fetching entries', {
      description: 'Could not retrieve changelog data'
    });
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
    
    if (error) {
      console.error('Error creating entry:', error);
      toast.error('Failed to create entry', {
        description: error.message
      });
      throw error;
    }
    
    toast.success('Entry created successfully');
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
    
    if (error) {
      console.error(`Error fetching entry ${id}:`, error);
      toast.error('Failed to fetch entry', {
        description: error.message
      });
      throw error;
    }
    
    return data as ChangelogEntry;
  } catch (error) {
    console.error(`Error fetching changelog entry with id ${id}:`, error);
    throw error;
  }
};

// Function to create a changelog entry via webhook API
export const createChangelogViaWebhook = async (entry: ChangelogEntry) => {
  try {
    console.log('Sending data to webhook:', entry);
    
    const response = await fetch('https://ycwttshvizkotcwwyjpt.supabase.co/functions/v1/changelog-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      console.error('Error sending to webhook:', errorData);
      toast.error('Failed to send to webhook', {
        description: errorData.error || response.statusText
      });
      throw new Error(errorData.error || response.statusText);
    }
    
    const data = await response.json();
    console.log('Webhook response:', data);
    toast.success('Entry created via webhook successfully');
    return data;
  } catch (error) {
    console.error('Error sending to webhook:', error);
    throw error;
  }
};
