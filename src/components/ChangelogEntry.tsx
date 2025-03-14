
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChangelogEntry } from '@/services/supabaseClient';
import CategoryBadge from './CategoryBadge';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';

interface ChangelogEntryProps {
  entry: ChangelogEntry;
  isLatest: boolean;
  index: number;
}

const ChangelogEntryComponent: React.FC<ChangelogEntryProps> = ({ entry, isLatest, index }) => {
  // Calculate the animation delay based on index
  const animationDelay = 0.1 + (index * 0.05);
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
    >
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
        <div className="flex items-center mb-2">
          <CategoryBadge category={entry.category} />
          <Link to={`/changelog/${entry.id}`} className="ml-2 hover:underline">
            <h3 className="text-xl font-medium">{entry.title}</h3>
          </Link>
        </div>
        
        <div className="prose prose-sm dark:prose-invert max-w-none mb-3 overflow-hidden">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </div>
        
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
