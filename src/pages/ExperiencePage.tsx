import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import Experience from '../components/Experience';
import { profileData } from '../data/profileData';

const ExperiencePage: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Experience - Shannel Oduor</title>
        <meta name="description" content="Discover Shannel Oduor's professional experience in graphic design, IT training, and customer service across various organizations." />
      </Helmet>
      
      <div className="pt-20">
        <Experience experiences={profileData.experience} />
      </div>
    </PageTransition>
  );
};

export default ExperiencePage;