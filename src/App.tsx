import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import LoadingScreen from './components/LoadingScreen';
import ScrollGrid from './components/ScrollGrid';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WebDesignProjects from './pages/WebDesignProjects';

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
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/web-design-projects" element={<WebDesignProjects />} />
                  </Routes>
                </PageTransition>
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