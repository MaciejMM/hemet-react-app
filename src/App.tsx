import React from 'react';
import './style/main.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './features/home-page/HomePage';
import { ContactPage } from './features/contact-page/ContactPage';
import { AboutPage } from './features/about-page/AboutPage';
import { ProjectPage } from './features/projects/ProjectPage';
import { ServicesPage } from './features/services-page/ServicesPage';
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
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
