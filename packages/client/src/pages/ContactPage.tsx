import React from 'react';
import NavBar from '../components/layout/navbar';
import Hero from '../components/features/contact/hero';
import SpecializedDepartments from '../components/features/contact/departments';

const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <SpecializedDepartments />
    </React.Fragment>
  );
};

export default ContactPage;
