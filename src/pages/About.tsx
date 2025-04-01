
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About OpenProjects</h1>
        <div className="prose prose-lg max-w-none">
          <p>
            OpenProjects is a centralized repository for open-source projects developed by students, faculty, and researchers. We aim to provide a platform for showcasing innovative work and facilitating collaboration across different disciplines.
          </p>
          <p>
            Our mission is to promote open-source development, encourage knowledge sharing, and foster a community of developers and researchers who can learn from each other's work.
          </p>
          <h2>Our Vision</h2>
          <p>
            We envision a world where academic and research projects are openly accessible, fostering innovation and collaboration. By providing a central hub for these projects, we aim to break down silos between departments and institutions, enabling more interdisciplinary work and knowledge exchange.
          </p>
          <h2>What We Offer</h2>
          <ul>
            <li>A searchable database of open-source projects across multiple disciplines</li>
            <li>Project details including source code, documentation, and demos</li>
            <li>Opportunities for collaboration and contribution</li>
            <li>Recognition for innovative work through our Ignite program</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
