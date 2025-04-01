
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilter from '../components/CategoryFilter';
import ProjectsGrid from '../components/ProjectsGrid';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  const [category, setCategory] = React.useState('All');
  const [currentPage, setCurrentPage] = React.useState(1);
  const projectsPerPage = 8; // Show fewer projects on homepage
  const totalPages = 2; // Fewer pages on homepage

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: document.getElementById('projects-section')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <HeroSection />
      
      <div id="projects-section">
        <div className="py-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Projects</h2>
                <p className="text-gray-600">
                  Discover innovative open source projects from our community
                </p>
              </div>
              <Link 
                to="/projects" 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                View all projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
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
      </div>
      
      {/* Call to action section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Showcase Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of innovators and share your open source project with the world.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
