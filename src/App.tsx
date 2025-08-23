import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import ScrollGrid from './components/ScrollGrid';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profileData';
import { Helmet } from 'react-helmet-async';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <Helmet>
        <title>Shannel Oduor - Senior Graphic Designer Portfolio</title>
        <meta name="description" content="Creative and detail-oriented graphic designer specializing in brand identity, digital illustration, and print design. View my portfolio of visually compelling designs." />
      </Helmet>
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <div key="main" className="dark:bg-gray-900 min-h-screen relative">
            <ScrollGrid />
            <PageTransition>
              <Header />
              <main>
                <Hero data={profileData} />
                <Skills skills={profileData.skills} />
                <Experience experiences={profileData.experience} />
                <Projects projects={profileData.projects} />
                <Education educations={profileData.education} />
                <Contact />
              </main>
              <Footer />
            </PageTransition>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;