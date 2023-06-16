import React, { useState } from 'react';
import Nav from './NavBar';
import AboutMe from './AboutMe';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
