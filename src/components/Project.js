import React from 'react';
import { useState, useEffect } from 'react';

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

const Project = ({ username, repo }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repo}`
        );
        if (response.ok) {
          const data = await response.json();
          setProject(data);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, [username, repo]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <a href={project.html_url} target='blank'>View on GitHub</a>
    </div>
  );
};

export default Project;