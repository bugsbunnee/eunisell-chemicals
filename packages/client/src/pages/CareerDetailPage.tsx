import React from 'react';
import NavBar from '../components/layout/navbar';
import Footer from '../components/common/footer';
import CareerDetailHero from '../components/features/career-detail/hero';
import JobDetails from '../components/features/career-detail/job-details';
import RoleContent from '../components/features/career-detail/role-content';
import Requirements from '../components/features/career-detail/requirements';
import WhatWeOffer from '../components/features/career-detail/what-we-offer';
import ApplicationForm from '../components/features/career-detail/application-form';
import CareersBanner from '../components/features/career-detail/careers-banner';
import KnowledgeCenter from '../components/features/about/knowledge-center';

const JOB = {
  title: 'Technical Sales Engineer',
  department: 'Business Development',
  location: 'Lagos, Nigeria',
  locationFull: 'Victoria Island, Lagos',
  type: 'Full-time',
  employmentType: 'Permanent Full-time',
  level: 'Mid-level',
  experienceLevel: 'Mid-Senior (5+ Years)',
  deadline: '30 July 2026',
  workMode: 'Hybrid (3 days onsite)',
  reportingTo: 'General Manager, BD',
  travelRequirement: 'Up to 40% Regional',
};

const aboutParagraphs = [
  "At Eunisell, our Technical Sales Engineers are the bridge between complex chemical engineering and strategic business growth. You won't just be selling products; you will be providing critical solutions that enable our partners in the oil, gas, and manufacturing sectors to optimize their operations.",
  'You will lead technical presentations, conduct field trials, and work closely with our laboratory team to customize chemical applications for specific client challenges. This role requires a unique blend of deep technical curiosity and commercial acumen.',
];

const responsibilities = [
  {
    title: 'Strategic Account Management',
    description: 'Identify and develop relationships with key stakeholders in the Upstream and Midstream oil and gas sectors.',
  },
  {
    title: 'Technical Solution Design',
    description:
      'Collaborate with the QHSE and Lab teams to design and propose specialized chemical solutions for production chemicals, water treatment, and corrosion control.',
  },
  {
    title: 'Field Performance Monitoring',
    description:
      'Conduct regular site visits to monitor chemical performance, troubleshoot issues, and provide technical advisory reports to clients.',
  },
  {
    title: 'Market Intelligence',
    description: 'Maintain a deep understanding of industry trends, competitor activities, and regulatory changes within the Nigerian energy sector.',
  },
];

const whyPoints = [
  { text: 'Direct impact on energy production' },
  { text: 'Autonomy in solution engineering' },
  { text: 'Pathway to regional leadership' },
];

const scrollToForm = () => {
  const form = document.getElementById('apply-form');
  if (form) form.scrollIntoView({ behavior: 'smooth' });
};

const CareerDetailPage: React.FC = () => (
  <React.Fragment>
    <NavBar />

    <CareerDetailHero
      title={JOB.title}
      department={JOB.department}
      location={JOB.location}
      type={JOB.type}
      level={JOB.level}
      deadline={JOB.deadline}
      isDeadlineSoon
      onApply={scrollToForm}
    />

    <JobDetails
      department={JOB.department}
      location={JOB.locationFull}
      employmentType={JOB.employmentType}
      experienceLevel={JOB.experienceLevel}
      deadline={JOB.deadline}
      workMode={JOB.workMode}
      reportingTo={JOB.reportingTo}
      travelRequirement={JOB.travelRequirement}
    />

    <RoleContent aboutText={aboutParagraphs} responsibilities={responsibilities} whyPoints={whyPoints} />

    <Requirements />

    <WhatWeOffer />

    <div id="apply-form">
      <ApplicationForm jobTitle={JOB.title} />
    </div>

    <KnowledgeCenter />
    <CareersBanner />
    <Footer />
  </React.Fragment>
);

export default CareerDetailPage;
