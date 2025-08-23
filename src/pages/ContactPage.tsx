import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact - Shannel Oduor</title>
        <meta name="description" content="Get in touch with Shannel Oduor for graphic design projects, IT services, or collaboration opportunities." />
      </Helmet>
      
      <div className="pt-20">
        <Contact />
      </div>
    </PageTransition>
  );
};

export default ContactPage;