import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name, about, technologies); // Ensure props are received correctly
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* Check if technologies array exists before using map */}
        {technologies && technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
