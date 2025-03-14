
import { ChangelogEntry, createChangelogEntry } from '@/services/supabaseClient';
import { processWebhookData, enhanceWithAI } from '@/services/aiProcessor';

/**
 * Webhook payload interface
 * 
 * When integrating with Supabase:
 * 1. Create a Supabase Edge Function to receive this payload
 * 2. Use webhook secrets for authentication
 * 3. Validate the payload before processing
 */
export interface WebhookPayload {
  title?: string;
  content?: string;
  category?: string;
  release_date?: string;
  released_by?: string;
  dev?: string;
  lessons_learned?: string; // New field for lessons learned
  [key: string]: any; // Allow for additional fields
}

/**
 * Main webhook handler
 * 
 * When integrating with Supabase:
 * 1. This logic would go in your Edge Function
 * 2. Process the webhook payload and store in Supabase
 * 3. Add appropriate error handling and response codes
 */
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

/**
 * Function to simulate a webhook for testing purposes
 * 
 * When integrating with Supabase:
 * - This can be useful for development and testing
 * - Can be exposed through a protected admin endpoint
 */
export const simulateWebhook = async (payload: WebhookPayload): Promise<ChangelogEntry> => {
  return handleWebhookRequest(payload);
};
