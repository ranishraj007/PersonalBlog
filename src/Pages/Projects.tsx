import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div>
      Profiles
      {projects.map((project) => (
        <Link key={project} to={`/project/${project}`} className="flex pt-10">
          Projects {project}
        </Link>
      ))}
    </div>
  );
};

export default Projects;
