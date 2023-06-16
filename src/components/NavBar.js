import React from 'react';

function Nav({ currentPage, handlePageChange }) {  
    return (
        <div>
            <nav className="navBar"> 
                <a href="#Project"
                onClick={() => handlePageChange('Project')}
                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
                <a href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
                <a href="#Resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
                <a href="#AboutMe"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </nav>
            <br/><br/>
        </div>
    );
  }

export default Nav;
