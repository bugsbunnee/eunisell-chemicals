import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/management/hero';
import Guide from '../components/features/management/guide';
import GroupManagingDirector from '../components/features/management/director';
import Team from '../components/features/management/team';
import Biography from '../components/features/management/biography';
import Philosophy from '../components/features/management/philosophy';
import Governance from '../components/features/management/governance';
import LeadershipValue from '../components/features/management/leadership-value';
import Cta from '../components/features/management/cta';
import Footer from '../components/common/footer';

const ManagementPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Guide />
      <GroupManagingDirector />
      <Team />
      <Biography />
      <Philosophy />
      <Governance />
      <LeadershipValue />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default ManagementPage;
