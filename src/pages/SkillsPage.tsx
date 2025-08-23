import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import Skills from '../components/Skills';
import { profileData } from '../data/profileData';

const SkillsPage: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Skills - Shannel Oduor</title>
        <meta name="description" content="Explore Shannel Oduor's technical skills, soft skills, and language proficiency in graphic design, IT, and customer service." />
      </Helmet>
      
      <div className="pt-20">
        <Skills skills={profileData.skills} />
      </div>
    </PageTransition>
  );
};

export default SkillsPage;