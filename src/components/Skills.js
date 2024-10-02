import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SkillsStyle.css'; // Crée un fichier CSS pour Skills

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="skills"
    >
      <h2>Compétences</h2>
      <p>Java, JavaScript, HTML, CSS, Python, SQL...</p>
    </motion.div>
  );
};

export default Skills;
