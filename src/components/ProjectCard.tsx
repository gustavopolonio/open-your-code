
import React from 'react';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  image: string;
  viewCount: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, viewCount }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-3 truncate">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-500">
            <Eye size={18} />
            <span className="text-sm">{viewCount}</span>
          </div>
          
          <a 
            href="#" 
            className="view-details-btn"
          >
            View details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
