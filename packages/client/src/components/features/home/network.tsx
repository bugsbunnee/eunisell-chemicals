import React from 'react';

import Clients from './clients';
import Partners from './partners';

const Network: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-30 border-t border-t-border">
      <Clients />
      <Partners />
    </section>
  );
};

export default Network;
