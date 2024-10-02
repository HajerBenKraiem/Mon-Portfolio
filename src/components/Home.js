import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HomeStyle.css' // Crée un fichier CSS pour Home

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <h2>Bienvenue sur mon Portfolio</h2>
      <p>Je suis Hajer Ben Kraiem, développeuse junior spécialisée dans le développement full-stack avec le stack MERN.</p>
    </motion.div>
  );
};

export default Home;
