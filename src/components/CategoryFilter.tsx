
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { motion } from 'framer-motion';
import { Tag, Clock, Zap, X } from 'lucide-react';

type CategoryFilterProps = {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  categories: string[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'feature': <Tag className="h-4 w-4" />,
  'fix': <Clock className="h-4 w-4" />,
  'performance': <Zap className="h-4 w-4" />,
  // Add more category icons as needed
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange,
  categories
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">Filter by category</h3>
        {selectedCategory && (
          <button 
            onClick={() => onCategoryChange(null)}
            className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-3 w-3" /> Clear filter
          </button>
        )}
      </div>
      
      <ToggleGroup 
        type="single" 
        value={selectedCategory || ''}
        onValueChange={(value) => onCategoryChange(value || null)}
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <ToggleGroupItem 
            key={category} 
            value={category}
            className="flex items-center gap-1 rounded-full text-xs capitalize"
            aria-label={`Filter by ${category}`}
          >
            {CATEGORY_ICONS[category] || <Tag className="h-3.5 w-3.5" />}
            {category}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </motion.div>
  );
};

export default CategoryFilter;
