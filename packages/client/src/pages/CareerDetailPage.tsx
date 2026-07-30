import React from 'react';
import dayjs from '../lib/dayjs';

import { useParams, Navigate } from 'react-router-dom';
import { paths } from '../lib/data';
import { useCareerOpeningBySlug } from '../hooks/use-career-openings';

import NavBar from '../components/layout/navbar';
import Footer from '../components/common/footer';
import CareerDetailSkeleton from '../components/features/career-detail/skeleton';
import CareerDetailHero from '../components/features/career-detail/hero';
import JobDetails from '../components/features/career-detail/job-details';
import RoleContent from '../components/features/career-detail/role-content';
import Requirements from '../components/features/career-detail/requirements';
import KeyPerformanceIndicators from '../components/features/career-detail/key-performance-indicators';
import WhatWeOffer from '../components/features/career-detail/what-we-offer';
import ApplicationForm from '../components/features/career-detail/application-form';
import CareersBanner from '../components/features/career-detail/careers-banner';
import KnowledgeCenter from '../components/features/about/knowledge-center';

const scrollToForm = () => {
  const form = document.getElementById('apply-form');
  if (form) form.scrollIntoView({ behavior: 'smooth' });
};

const CareerDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: role, isLoading, isError } = useCareerOpeningBySlug(slug);

  if (isError) return <Navigate to={paths.careers} replace />;

  if (isLoading || !role) {
    return (
      <React.Fragment>
        <NavBar />
        <CareerDetailSkeleton />
        <Footer />
      </React.Fragment>
    );
  }

  const deadline = dayjs(role.deadline).format('DD MMMM YYYY');
  const isDeadlineSoon = dayjs(role.deadline).diff(dayjs(), 'day') <= 14;

  return (
    <React.Fragment>
      <NavBar />

      <CareerDetailHero
        title={role.title}
        department={role.department}
        location={role.location}
        type={role.jobType}
        level={role.level}
        deadline={deadline}
        isDeadlineSoon={isDeadlineSoon}
        onApply={scrollToForm}
      />

      <JobDetails
        department={role.department}
        location={role.location}
        employmentType={role.jobType}
        experienceLevel={`${role.level} (${role.experienceRange})`}
        deadline={deadline}
        workMode={role.workMode}
        reportingTo={role.reportingLine}
        travelRequirement={role.travelRequirement}
      />

      <RoleContent aboutText={role.aboutText} responsibilities={role.responsibilities} whyPoints={role.highlights.map((text) => ({ text }))} />

      <Requirements
        requirements={{
          education: role.educationRequirement,
          experience: role.experienceRequirement,
          skills: role.skillsRequirement,
          advantage: role.advantageRequirement,
        }}
      />

      <KeyPerformanceIndicators items={role.kpis} />

      <WhatWeOffer />

      <div id="apply-form">
        <ApplicationForm jobTitle={role.title} />
      </div>

      <KnowledgeCenter />
      <CareersBanner />
      <Footer />
    </React.Fragment>
  );
};

export default CareerDetailPage;
