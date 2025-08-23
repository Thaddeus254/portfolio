import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import Education from '../components/Education';
import { profileData } from '../data/profileData';

const EducationPage: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Education - Shannel Oduor</title>
        <meta name="description" content="Learn about Shannel Oduor's educational background, qualifications, and certifications in graphic design and web development." />
      </Helmet>
      
      <div className="pt-20">
        <Education educations={profileData.education} />
      </div>
    </PageTransition>
  );
};

export default EducationPage;