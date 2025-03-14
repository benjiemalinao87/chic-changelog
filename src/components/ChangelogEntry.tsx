
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
      {/* Badge for latest entry */}
      {isLatest && (
        <div className="absolute -left-4 top-3 flex items-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="ml-2 text-xs font-medium text-primary">Latest</span>
        </div>
      )}
      
      <div className="pt-2">
        {/* Entry header with category and title */}
        <div className="flex items-center mb-2">
          <CategoryBadge category={entry.category} />
          <Link to={`/changelog/${entry.id}`} className="ml-2 hover:underline">
            <h3 className="text-xl font-medium">{entry.title}</h3>
          </Link>
        </div>
        
        {/* Main content */}
        <div className="prose prose-sm dark:prose-invert max-w-none mb-3 overflow-hidden">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </div>
        
        {/* Lessons learned section - only shown if there are lessons */}
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
          {entry.release_date && (
            <span>
              {format(parseISO(entry.release_date), 'MMMM d, yyyy')}
            </span>
          )}
          <span>•</span>
          <span>{entry.released_by}</span>
          <span>•</span>
          <span>{entry.dev}</span>
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
