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
      return (
        <div>
          <Project username={`that-devguy`} repo={`Pokedex-Web-Application`}/>,
          <Project username={`smilillo`} repo={`Pocket-Plant`}/>,
          <Project username={`Cleegould`} repo={`TheJourney`}/>,
          <Project username={`J05H94`} repo={`PWA-Challenge`}/>,
          <Project username={`J05H94`} repo={`socialAPI`}/>,
          <Project username={`J05H94`} repo={`Employee_Tracker`}/>,
          <Project username={`J05H94`} repo={`note-taker`}/>,
        </div>
      );
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
