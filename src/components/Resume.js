import React from 'react';

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

function Resume() {  
  return (
    <div className='block' id='' >
      <h1>Resume</h1>
      <p>Click the link to download my resume: <a href="../Resume.txt" download>Download Resume</a></p>
    </div>
  );
}
  
export default Resume;
