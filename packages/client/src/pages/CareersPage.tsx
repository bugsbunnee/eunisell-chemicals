import React from 'react';
import NavBar from '../components/layout/navbar';
import Footer from '../components/common/footer';
import CareersHero from '../components/features/careers/hero';
import OpenPositions from '../components/features/careers/open-positions';
import CareersAdvantage from '../components/features/careers/advantage';
import WhereYouFit from '../components/features/careers/where-you-fit';
import RecruitmentProcess from '../components/features/careers/recruitment';
import TechnicalFramework from '../components/features/careers/framework';
import LifeAtEunisell from '../components/features/careers/life-at';
import ApplyCta from '../components/features/careers/apply-cta';
import LearnMore from '../components/features/careers/learn-more';
import CareerCta from '../components/features/careers/career-cta';

const CareersPage: React.FC = () => (
  <React.Fragment>
    <NavBar />
    <CareersHero />
    <OpenPositions />
    <CareersAdvantage />
    <WhereYouFit />
    <RecruitmentProcess />
    <TechnicalFramework />
    <LifeAtEunisell />
    <ApplyCta />
    <LearnMore />
    <CareerCta />
    <Footer />
  </React.Fragment>
);

export default CareersPage;
