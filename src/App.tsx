import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import LoadingScreen from './components/LoadingScreen';
import ScrollGrid from './components/ScrollGrid';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
            ) : (
              <div key="main" className="dark:bg-gray-900 min-h-screen relative">
                <ScrollGrid />
                <Header />
                <main className="min-h-screen">
                  <AnimatePresence mode="wait">
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/skills" element={<SkillsPage />} />
                      <Route path="/experience" element={<ExperiencePage />} />
                      <Route path="/projects" element={<ProjectsPage />} />
                      <Route path="/education" element={<EducationPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                  </AnimatePresence>
                </main>
                <Footer />
              </div>
            )}
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;