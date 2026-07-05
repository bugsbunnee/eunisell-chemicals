import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/graduate-trainee/hero';
import WhyJoin from '../components/features/graduate-trainee/why-join';
import Expectations from '../components/features/graduate-trainee/expectations';
import LookingFor from '../components/features/graduate-trainee/looking-for';
import Eligibility from '../components/features/graduate-trainee/eligibility';
import RecruitmentProcess from '../components/features/graduate-trainee/recruitment-process';
import LifeAt from '../components/features/graduate-trainee/life-at';
import Faq from '../components/features/graduate-trainee/faq';
import CTA from '../components/features/graduate-trainee/cta';
import Footer from '../components/common/footer';

const GraduateTraineePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <WhyJoin />
      <Expectations />
      <LookingFor />
      <Eligibility />
      <RecruitmentProcess />
      <LifeAt />
      <Faq />
      <CTA />
      <Footer />
    </React.Fragment>
  );
};

export default GraduateTraineePage;
