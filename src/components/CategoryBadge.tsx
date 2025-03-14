
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type CategoryProps = {
  category: string;
  className?: string;
};

/**
 * CategoryBadge component displays a styled badge for changelog categories
 * 
 * @param category - The category name to display (e.g., 'feature', 'improvement', 'fix')
 * @param className - Optional additional classes to apply to the badge
 * @returns A styled badge component with appropriate colors for each category type
 */
const CategoryBadge = ({ category, className }: CategoryProps) => {
  // Get appropriate styling based on the category type
  const getCategoryStyles = () => {
    switch (category.toLowerCase()) {
      case 'feature':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      case 'improvement':
        return 'bg-green-500 text-white hover:bg-green-600';
      case 'fix':
        return 'bg-amber-500 text-white hover:bg-amber-600';
      case 'security':
        return 'bg-red-500 text-white hover:bg-red-600';
      case 'performance':
        return 'bg-indigo-500 text-white hover:bg-indigo-600';
      default:
        return 'bg-gray-500 text-white hover:bg-gray-600';
    }
  };

  return (
    <Badge
      className={cn(
        'font-medium text-xs px-2.5 py-0.5 rounded-md shadow-sm',
        getCategoryStyles(),
        className
      )}
    >
      {category}
    </Badge>
  );
};

export default CategoryBadge;
