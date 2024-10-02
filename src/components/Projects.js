import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectsStyle.css' // Crée un fichier CSS pour Projects

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="projects"
    >
      <h2>Mes Projets</h2>
      <ul>
        <li>
          <h3>Application Web Touristique</h3>
          <p>Description du projet...</p>
        </li>
        <li>
          <h3>Site E-commerce</h3>
          <p>Description du projet...</p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Projects;
