
import React from 'react';
import { cn } from '@/lib/utils';

type CategoryProps = {
  category: string;
  className?: string;
};

const CategoryBadge = ({ category, className }: CategoryProps) => {
  const getCategoryStyles = () => {
    switch (category.toLowerCase()) {
      case 'feature':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'improvement':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'fix':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'security':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'performance':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        getCategoryStyles(),
        className
      )}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
