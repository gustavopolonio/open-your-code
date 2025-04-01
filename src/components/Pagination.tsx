
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  totalPages, 
  currentPage, 
  onPageChange 
}) => {
  // Calculate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 5) {
      // If 5 or fewer pages, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first page
      pages.push(1);
      
      if (currentPage <= 3) {
        // Near the beginning
        pages.push(2, 3, 4, '...');
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1);
      } else {
        // Middle - show current and neighbors
        pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...');
      }
      
      // Always include last page
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <div className="container flex justify-center my-8">
      <nav className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`pagination-btn ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          aria-label="Previous page"
        >
          <ArrowLeft size={18} />
        </button>
        
        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-2 text-gray-500">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`pagination-btn ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          aria-label="Next page"
        >
          <ArrowRight size={18} />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
