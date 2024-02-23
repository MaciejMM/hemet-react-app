import React from 'react';
import './main.scss';
import { MobileMenu } from './components/MobileMenu';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './features/home/HomePage';
import { AboutPage } from './features/about/AboutPage';
import { Footer } from './components/Footer';
import { ContactPage } from './features/contact/ContactPage';
import { ProjectPage } from './features/projects/ProjectPage';
import { useAppStore } from './state/AppState';

const App = () => {
  const { showMenu } = useAppStore((state) => ({
    showMenu: state.showMenu,
  }));

  const pages = (<div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
  </div>);

  if (showMenu) {
    return (<MobileMenu></MobileMenu>);
  } else {
    return pages;
  }


};

export default App;
