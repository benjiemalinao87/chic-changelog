
import { ChangelogEntry, createChangelogEntry } from '@/services/supabaseClient';
import { processWebhookData, enhanceWithAI } from '@/services/aiProcessor';

// This would typically be an API route handler
// For demonstration, we'll create a function that simulates receiving webhook data

export interface WebhookPayload {
  title?: string;
  content?: string;
  category?: string;
  release_date?: string;
  released_by?: string;
  dev?: string;
  [key: string]: any; // Allow for additional fields
}

export const handleWebhookRequest = async (payload: WebhookPayload): Promise<ChangelogEntry> => {
  try {
    console.log('Received webhook payload:', payload);
    
    // Process the webhook data with AI to structure it
    const processedEntry = await processWebhookData(payload);
    
    // Enhance the entry with AI for better formatting and summarization
    const enhancedEntry = await enhanceWithAI(processedEntry);
    
    // Save the entry to Supabase
    const savedEntry = await createChangelogEntry(enhancedEntry);
    
    console.log('Successfully processed and saved changelog entry:', savedEntry);
    
    return savedEntry;
  } catch (error) {
    console.error('Error processing webhook:', error);
    throw error;
  }
};

// Function to simulate a webhook for testing purposes
export const simulateWebhook = async (payload: WebhookPayload): Promise<ChangelogEntry> => {
  return handleWebhookRequest(payload);
};
