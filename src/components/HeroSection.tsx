
import React from "react";
import { motion } from "framer-motion";
import StatsCard from "./StatsCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <svg 
          className="absolute right-0 top-0 h-full w-1/2 text-blue-100 transform translate-x-1/3" 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C200,300 400,500 1000,700 L1000,0 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div 
        className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,226,217,0.4) 0%, rgba(255,226,217,0) 70%)'
        }}
      />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-poppins">
              An Intelligent Approach to the Centralized Data Repository of Open Source Projects
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-inter">
              This repository can serve as a valuable resource for students, faculty, and researchers.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/projects">Browse Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-blue-100 rounded-full p-6 overflow-hidden">
              <img 
                src="/code-repository.jpg" 
                alt="Code Repository" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Curved arrow decoration */}
            <svg 
              className="absolute -left-10 bottom-10 w-44 h-44 text-red-200 transform -rotate-10" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 100 100" 
              fill="none"
            >
              <path 
                d="M10,50 Q30,20 50,50 T90,50" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round"
              />
              <path 
                d="M80,45 L90,50 L85,60" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <StatsCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
