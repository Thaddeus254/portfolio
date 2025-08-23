import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import Projects from '../components/Projects';
import { profileData } from '../data/profileData';

const ProjectsPage: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Projects - Shannel Oduor</title>
        <meta name="description" content="View Shannel Oduor's portfolio of graphic design projects, web design work, IT solutions, and creative services." />
      </Helmet>
      
      <div className="pt-20">
        <Projects projects={profileData.projects} />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;