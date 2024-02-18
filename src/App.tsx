import React from 'react';
import './main.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './features/home/HomePage';
import { ContactPage } from './features/contact/ContactPage';
import { AboutPage } from './features/about/AboutPage';
import { ProjectPage } from './features/projects/ProjectPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
