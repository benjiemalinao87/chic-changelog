
import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ChangelogEntry as ChangelogEntryType } from '@/services/supabaseClient';
import CategoryBadge from './CategoryBadge';
import ReactMarkdown from 'react-markdown';

interface ChangelogEntryProps {
  entry: ChangelogEntryType;
  isLatest?: boolean;
  index: number;
}

const ChangelogEntry = ({ entry, isLatest, index }: ChangelogEntryProps) => {
  const formattedDate = entry.release_date 
    ? format(new Date(entry.release_date), 'MMMM d, yyyy')
    : 'Unknown date';

  return (
    <motion.div
      className={`mb-8 ${isLatest ? 'pb-8 border-b' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center mb-1 gap-2">
          <CategoryBadge category={entry.category} />
          <span className="text-sm text-muted-foreground">
            {formattedDate}
          </span>
          {isLatest && (
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800/20">
              Latest
            </span>
          )}
        </div>
        <h2 className="text-xl font-medium tracking-tight">{entry.title}</h2>
        <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </div>
        <div className="flex items-center pt-2 text-sm text-muted-foreground">
          <span>Released by <span className="font-medium text-foreground">{entry.released_by}</span></span>
          <span className="mx-2">•</span>
          <span>Developed by <span className="font-medium text-foreground">{entry.dev}</span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChangelogEntry;
