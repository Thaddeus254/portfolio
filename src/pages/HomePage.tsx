import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { profileData } from '../data/profileData';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Shannel Oduor - Senior Graphic Designer Portfolio</title>
        <meta name="description" content="Creative and detail-oriented graphic designer specializing in brand identity, digital illustration, and print design. View my portfolio of visually compelling designs." />
      </Helmet>
      
      <main>
        <Hero data={profileData} />
        <Skills skills={profileData.skills} />
        <Experience experiences={profileData.experience} />
        <Projects projects={profileData.projects} />
        <Education educations={profileData.education} />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;