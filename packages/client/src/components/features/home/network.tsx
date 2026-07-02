import React from 'react';

import Clients from './clients';
import Partners from './partners';

const Network: React.FC = () => {
  return (
    <section className="border-t border-t-border">
      <Clients />
      <Partners />
    </section>
  );
};

export default Network;
