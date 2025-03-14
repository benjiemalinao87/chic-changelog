
import { ChangelogEntry } from './supabaseClient';

// This would typically connect to an AI service like OpenAI
// For now, we'll use a placeholder implementation that structures the data

interface WebhookData {
  title?: string;
  content?: string;
  category?: string;
  release_date?: string;
  released_by?: string;
  dev?: string;
  lessons_learned?: string; // New field for lessons learned
}

/**
 * Process incoming webhook data to create a structured changelog entry
 * 
 * When integrating with Supabase:
 * 1. Configure a webhook endpoint in your API (e.g., Supabase Edge Function)
 * 2. Parse the incoming webhook payload
 * 3. Call this function to process the data
 * 4. Store the result in your Supabase database
 */
export const processWebhookData = async (data: WebhookData): Promise<ChangelogEntry> => {
  // In a real implementation, this would call an AI service to process and structure the data
  console.log('Processing webhook data with AI:', data);
  
  // For now, we'll just format and structure the data we received
  const structuredEntry: ChangelogEntry = {
    title: data.title || 'Untitled Update',
    content: formatContent(data.content || ''),
    category: data.category || 'general',
    release_date: data.release_date || new Date().toISOString(),
    released_by: data.released_by || 'System',
    dev: data.dev || 'Unknown',
    lessons_learned: formatLessonsLearned(data.lessons_learned || ''),
    modified_date: new Date().toISOString(),
  };
  
  return structuredEntry;
};

/**
 * Helper function to format content in a structured way
 * 
 * When integrating with Supabase and a real AI service:
 * 1. Replace this with calls to your preferred AI service
 * 2. Consider using Supabase Edge Functions to handle the AI processing securely
 * 3. Store API keys in Supabase environment variables, not client-side code
 */
function formatContent(content: string): string {
  // In a real implementation, AI would structure this content
  // For now, we'll do some basic formatting
  
  if (!content.includes('- ')) {
    // If there are no bullet points, add some structure
    const sections = content.split(/\n\n+/);
    
    if (sections.length > 1) {
      return sections.map(section => `- ${section.trim()}`).join('\n\n');
    } else {
      // Simple content gets a single bullet
      return `- ${content.trim()}`;
    }
  }
  
  // Content already has bullet points, return as is
  return content;
}

/**
 * Format lessons learned content
 * 
 * When integrating with Supabase:
 * - This function could be expanded to use AI to generate lessons learned
 * - Could analyze the release notes and suggest lessons automatically
 */
function formatLessonsLearned(lessons: string): string {
  if (!lessons) return '';
  
  // Add a header if one doesn't exist
  if (!lessons.includes('Lessons Learned')) {
    lessons = `**Lessons Learned:**\n\n${lessons}`;
  }
  
  // Format bullet points if needed
  if (!lessons.includes('- ')) {
    const sections = lessons.split(/\n\n+/);
    const header = sections[0];
    const rest = sections.slice(1);
    
    if (rest.length) {
      return `${header}\n\n${rest.map(section => `- ${section.trim()}`).join('\n\n')}`;
    }
  }
  
  return lessons;
}

/**
 * In the future, this would use an AI model to enhance the changelog
 * 
 * When integrating with Supabase:
 * 1. Use Supabase Edge Functions to call AI APIs securely
 * 2. Store the enhanced entry back in your Supabase database
 * 3. Consider implementing a background job system for longer-running AI tasks
 */
export const enhanceWithAI = async (entry: ChangelogEntry): Promise<ChangelogEntry> => {
  // This is where we would call an AI service to enhance the entry
  // For now, we'll return the entry as is with a mock enhancement
  
  // Add a "Key Highlights" section if it doesn't exist
  if (!entry.content.includes('Key Highlights')) {
    const enhancedContent = `**Key Highlights:**\n${entry.content}`;
    return { ...entry, content: enhancedContent };
  }
  
  // Generate lessons learned if they don't exist
  if (!entry.lessons_learned) {
    const mockLessons = `**Lessons Learned:**\n\n- Always test thoroughly before deployment\n- Document all changes for future reference\n- Engage with users to gather feedback`;
    return { ...entry, lessons_learned: mockLessons };
  }
  
  return entry;
};
