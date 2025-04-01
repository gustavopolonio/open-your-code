
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';
import ProjectsGrid from '../components/ProjectsGrid';
import Pagination from '../components/Pagination';

const Projects = () => {
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12;
  const totalPages = 5; // This should be calculated based on your data

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <div className="py-8 bg-gradient-to-b from-blue-50 to-transparent">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Projects</h1>
          <p className="text-lg text-gray-600">
            Explore our collection of open source projects from various departments
          </p>
        </div>
      </div>
      
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      
      <ProjectsGrid 
        category={category}
        currentPage={currentPage}
        projectsPerPage={projectsPerPage}
      />
      
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      
      <Footer />
    </>
  );
};

export default Projects;
