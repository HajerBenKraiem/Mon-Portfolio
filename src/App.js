import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css'; // Si tu souhaites ajouter des styles globaux

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Mon Portfolio</h1>
          <nav>
            <a href="/">Accueil</a>
            <a href="/about">À propos</a>
            <a href="/projects">Projets</a>
            <a href="/skills">Compétences</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
