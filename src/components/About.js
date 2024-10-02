import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutStyle.css'; // Assure-toi que le chemin vers ton fichier CSS est correct
import profil from '../assets/profil.jpg'; // Corrige le chemin ici

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <h2>À propos de moi</h2>
      <img src={profil} alt="Hajer Ben Kraiem" className="profile-photo" />
      <h1>Développeuse</h1>
      <p>Je suis diplômée en Développement des Systèmes d'Information...</p>
    </motion.div>
  );
};

export default About;
