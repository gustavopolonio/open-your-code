
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="container py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-all duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
