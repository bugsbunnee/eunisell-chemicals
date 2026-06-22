import React from 'react';
import { FactoryIcon, MicroscopeIcon, ShieldHalfIcon } from 'lucide-react';
import ContactForm from './contact-form';

const solutions = [
  {
    Icon: MicroscopeIcon,
    title: 'Technical Review',
    description: 'Every enquiry is evaluated by a senior chemical engineer for technical feasibility.',
  },
  {
    Icon: FactoryIcon,
    title: 'Industry Focused',
    description: 'Our team provides sector-specific solutions from oilfield to manufacturing.',
  },
  {
    Icon: ShieldHalfIcon,
    title: 'Confidential',
    description: 'All proprietary data and chemical formulations are protected by NDA standards.',
  },
];

const SolutionRequest: React.FC = () => {
  return (
    <section className="py-24 px-30 grid grid-cols-[1fr_2fr] gap-x-24">
      <div className="text-left">
        <div className="text-4xl text-accent font-bold leading-11.25">Enterprise Solution Request</div>

        <p className="text-lg mt-8">Submit a detailed enquiry and our industrial experts will review your requirements within 24 business hours.</p>

        <div className="space-y-6 mt-12">
          {solutions.map((solution) => (
            <div key={solution.title} className="bg-sidebar border border-[#F1F5F9] py-6 px-6 flex items-start gap-x-6 rounded-[4px]">
              <solution.Icon size={36} className="text-secondary" />

              <div className="space-y-2">
                <div className="text-accent text-base leading-6 font-bold">{solution.title}</div>
                <div className="text-primary text-sm leading-5 font-normal">{solution.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default SolutionRequest;
