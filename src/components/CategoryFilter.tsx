
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  "All",
  "Computer Systems",
  "Software",
  "Mechanical",
  "Telecommunication",
  "Civil",
  "Chemical"
];

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="py-8 border-b border-gray-200">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-6 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`whitespace-nowrap category-btn ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    layoutId="categoryIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:border-blue-600 transition-colors">
            <FilterIcon />
            <span>Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

export default CategoryFilter;
