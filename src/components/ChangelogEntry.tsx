
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChangelogEntry } from '@/services/supabaseClient';
import CategoryBadge from './CategoryBadge';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChangelogEntryProps {
  entry: ChangelogEntry;
  isLatest: boolean;
  index: number;
}

/**
 * ChangelogEntryComponent displays an individual changelog entry with its details
 * 
 * Database Table Structure:
 * - id: Primary key (integer)
 * - title: Entry title (text)
 * - content: Main content in markdown format (text)
 * - category: Category identifier (text) - e.g., 'feature', 'fix', 'performance'
 * - release_date: Date of release (timestamp)
 * - released_by: Person/team who released (text)
 * - dev: Development team responsible (text)
 * - lessons_learned: Lessons learned in markdown format (text, optional)
 * - modified_date: Last modification date (timestamp, optional)
 * - created_at: Creation timestamp (timestamp)
 * 
 * @param entry - The changelog entry data to display
 * @param isLatest - Boolean indicating if this is the latest entry
 * @param index - Index position in the list for animation timing
 */
const ChangelogEntryComponent: React.FC<ChangelogEntryProps> = ({ entry, isLatest, index }) => {
  // State to control the expansion of the lessons learned section
  const [lessonsExpanded, setLessonsExpanded] = useState(false);
  
  // Calculate the animation delay based on index
  const animationDelay = 0.1 + (index * 0.05);
  
  const toggleLessons = () => {
    setLessonsExpanded(!lessonsExpanded);
  };
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
    >
      {/* "Latest" badge - not stored in database, determined by sort order */}
      {isLatest && (
        <div className="absolute -top-2 right-0 flex items-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="ml-2 text-xs font-medium text-primary">Latest</span>
        </div>
      )}
      
      <div className="pt-2">
        {/* Entry header with category and title */}
        {/* Maps to 'category' and 'title' columns */}
        <div className="flex items-center gap-2 mb-2">
          <CategoryBadge category={entry.category} />
          <Link to={`/changelog/${entry.id}`} className="hover:underline">
            <h3 className="text-xl font-medium">{entry.title}</h3>
          </Link>
        </div>
        
        {/* Main content - Maps to 'content' column */}
        <div className="prose prose-sm dark:prose-invert max-w-none mb-3 overflow-hidden">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </div>
        
        {/* Lessons learned section - Maps to 'lessons_learned' column (optional) */}
        {entry.lessons_learned && (
          <div className="mt-4 mb-3">
            <button
              onClick={toggleLessons}
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/90 transition-colors"
            >
              <Lightbulb className="h-4 w-4" />
              Lessons Learned
              {lessonsExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>
            
            {/* Lessons content - shown/hidden based on lessonsExpanded state */}
            <div 
              className={cn(
                "mt-2 transition-all duration-300 overflow-hidden rounded-md neo-blur p-3",
                lessonsExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 py-0"
              )}
            >
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>{entry.lessons_learned}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}
        
        {/* Entry footer with metadata */}
        <div className="flex items-center text-xs text-muted-foreground gap-2">
          {/* Release date - Maps to 'release_date' column */}
          {entry.release_date && (
            <span>
              {format(parseISO(entry.release_date), 'MMMM d, yyyy')}
            </span>
          )}
          <span>•</span>
          {/* Released by - Maps to 'released_by' column */}
          <span>{entry.released_by}</span>
          <span>•</span>
          {/* Dev team - Maps to 'dev' column */}
          <span>{entry.dev}</span>
          {/* Link to details view using the entry ID (primary key) */}
          <Link 
            to={`/changelog/${entry.id}`}
            className="ml-auto text-xs text-primary hover:underline"
          >
            View details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ChangelogEntryComponent;
