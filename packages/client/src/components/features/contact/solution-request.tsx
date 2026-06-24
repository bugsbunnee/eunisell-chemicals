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
    <section className="py-16 px-6 md:py-24 md:px-30 flex flex-col md:grid md:grid-cols-[1fr_2fr] md:gap-x-24">
      {/* Mobile-only heading */}
      <div className="md:hidden text-center mb-10">
        <h2 className="text-[30px] font-bold text-accent leading-9">Send an Enquiry</h2>
        <p className="text-[16px] text-card-foreground leading-6 mt-4">
          Please provide your details and our technical team will contact you within 24 hours.
        </p>
      </div>

      {/* Left column — desktop only */}
      <div className="hidden md:block text-left">
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
