
import React from 'react';
import ProjectCard from './ProjectCard';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Charging Station Alarm Clock',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Software'
  },
  {
    id: 2,
    title: 'Gender and Age Detection System',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Computer Systems'
  },
  {
    id: 3,
    title: 'Movie Recommendation System',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Software'
  },
  {
    id: 4,
    title: 'Dice Rolling Simulator',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Software'
  },
  {
    id: 5,
    title: 'Credit Scoring System',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Software'
  },
  {
    id: 6,
    title: 'Customer Segmentation System',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Software'
  },
  {
    id: 7,
    title: 'Android Chatbot',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Telecommunication'
  },
  {
    id: 8,
    title: 'Currency Converter',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Software'
  },
  {
    id: 9,
    title: 'Personality Prediction System',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Computer Systems'
  },
  {
    id: 10,
    title: 'Online Examination and Evaluation System',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Software'
  },
  {
    id: 11,
    title: 'Fitness Activity Recognition for Smartphone',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Telecommunication'
  },
  {
    id: 12,
    title: 'Fraud App Detection Software',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    viewCount: 233,
    category: 'Computer Systems'
  }
];

interface ProjectsGridProps {
  category?: string;
  currentPage: number;
  projectsPerPage: number;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  category = 'All',
  currentPage = 1,
  projectsPerPage = 12
}) => {
  // Filter projects based on category
  const filteredProjects = category === 'All'
    ? projects
    : projects.filter(project => project.category === category);
  
  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            viewCount={project.viewCount}
          />
        ))}
      </div>

      {currentProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-500">No projects found in this category</h3>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
