
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getChangelogEntries, ChangelogEntry as ChangelogEntryType } from '@/services/supabaseClient';
import ChangelogEntryComponent from './ChangelogEntry';
import { Skeleton } from '@/components/ui/skeleton';
import CategoryFilter from './CategoryFilter';
import { useSearchParams } from 'react-router-dom';

const ChangelogList = () => {
  const [entries, setEntries] = useState<ChangelogEntryType[]>([]);
  const [allEntries, setAllEntries] = useState<ChangelogEntryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<string[]>([]);
  
  // Get filter from URL or null
  const categoryFilter = searchParams.get('category');

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);
        const data = await getChangelogEntries();
        setAllEntries(data);
        
        // Extract unique categories for the filter
        const uniqueCategories = Array.from(new Set(data.map(entry => entry.category)));
        setCategories(uniqueCategories);
        
        setError(null);
      } catch (err) {
        console.error('Failed to fetch changelog entries', err);
        setError('Failed to load changelog entries. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  // Filter entries whenever the filter changes
  useEffect(() => {
    if (allEntries.length > 0) {
      if (categoryFilter) {
        setEntries(allEntries.filter(entry => entry.category === categoryFilter));
      } else {
        setEntries(allEntries);
      }
    }
  }, [categoryFilter, allEntries]);

  const handleCategoryChange = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  if (loading) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-8">
            <div className="flex items-center mb-2 gap-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-20 w-full mb-2" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <motion.div 
        className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-600 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {error}
      </motion.div>
    );
  }

  if (allEntries.length === 0) {
    return (
      <motion.div 
        className="p-6 bg-secondary rounded-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-lg mb-2">No changelog entries yet</p>
        <p className="text-muted-foreground">When updates are posted, they will appear here.</p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <div>
        {categories.length > 0 && (
          <CategoryFilter 
            selectedCategory={categoryFilter} 
            onCategoryChange={handleCategoryChange}
            categories={categories}
          />
        )}
        
        {entries.length === 0 && categoryFilter ? (
          <motion.div 
            className="p-6 bg-secondary rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-muted-foreground">No entries found for category "{categoryFilter}"</p>
          </motion.div>
        ) : (
          <div className="space-y-8 entry-animation">
            {entries.map((entry, index) => (
              <ChangelogEntryComponent 
                key={entry.id || index} 
                entry={entry} 
                isLatest={index === 0 && !categoryFilter}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default ChangelogList;
