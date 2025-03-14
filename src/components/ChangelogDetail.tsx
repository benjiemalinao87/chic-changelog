
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getChangelogEntryById, ChangelogEntry } from '@/services/supabaseClient';
import { format, parseISO } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import CategoryBadge from './CategoryBadge';
import { Separator } from '@/components/ui/separator';

const ChangelogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState<ChangelogEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch the specific changelog entry by ID
    const fetchEntry = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const entryId = parseInt(id, 10);
        const data = await getChangelogEntryById(entryId);
        setEntry(data);
        setError(null);
      } catch (err) {
        console.error(`Failed to fetch changelog entry with id ${id}`, err);
        setError('Failed to load the changelog entry. It may have been removed or never existed.');
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, [id]);

  const handleGoBack = () => {
    navigate('/');
  };

  // Loading state
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div>
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-5 w-32" />
          </div>
        </div>
        <Skeleton className="h-6 w-32 rounded-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  // Error state
  if (error || !entry) {
    return (
      <motion.div 
        className="p-6 neo-blur rounded-lg text-red-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleGoBack}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Changelog
        </Button>
        <p>{error || "Entry not found"}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Navigation back button */}
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleGoBack}
          className="rounded-full neo-blur"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Changelog
        </Button>
        
        {/* Release date */}
        {entry.release_date && (
          <span className="text-sm text-muted-foreground">
            {format(parseISO(entry.release_date), 'MMMM d, yyyy')}
          </span>
        )}
      </div>
      
      {/* Entry header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <CategoryBadge category={entry.category} />
          <h2 className="text-2xl font-semibold">{entry.title}</h2>
        </div>
        
        {/* Entry metadata */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Released by: {entry.released_by}</span>
          <span>•</span>
          <span>Team: {entry.dev}</span>
        </div>
      </div>
      
      {/* Main content */}
      <div className="prose prose-sm dark:prose-invert max-w-none neo-blur p-6 rounded-xl">
        <ReactMarkdown>{entry.content}</ReactMarkdown>
      </div>
      
      {/* Lessons learned section */}
      {entry.lessons_learned && (
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-yellow-400" />
            <h3 className="text-xl font-medium">Lessons Learned</h3>
          </div>
          <div className="prose prose-sm dark:prose-invert max-w-none neo-blur p-6 rounded-xl border border-yellow-500/20">
            <ReactMarkdown>{entry.lessons_learned}</ReactMarkdown>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ChangelogDetail;
