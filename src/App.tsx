import React from 'react';
import './style/main.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './features/home-page/HomePage';
import { ContactPage } from './features/contact-page/ContactPage';
import { AboutPage } from './features/about-page/AboutPage';
import { ProjectPage } from './features/projects-page/ProjectPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';

const App = () => {
  const nonce: string = Buffer.from(uuidv4()).toString('base64');

  return (
    <div>
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
                      default-src 'self' 'nonce-${nonce}';
                      script-src 'self';
                      img-src 'self' https://res.cloudinary.com;
                      style-src 'self' 'unsafe-inline';
                `}
        ></meta>
      </Helmet>

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
