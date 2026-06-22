import React from 'react';

import NavBar from '../components/layout/navbar';
import Hero from '../components/features/management/hero';
import Guide from '../components/features/management/guide';
import GroupManagingDirector from '../components/features/management/director';
import Team from '../components/features/management/team';
import Biography from '../components/features/management/biography';

const ManagementPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Guide />
      <GroupManagingDirector />
      <Team />
      <Biography />
    </React.Fragment>
  );
};

export default ManagementPage;
