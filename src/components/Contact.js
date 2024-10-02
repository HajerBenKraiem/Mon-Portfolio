import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ContactStyle.css'; // Crée un fichier CSS pour Contact

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact"
    >
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message" />
        <button type="submit">Envoyer</button>
      </form>
    </motion.div>
  );
};

export default Contact;
