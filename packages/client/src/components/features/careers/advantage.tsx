import React from 'react';
import { FlaskConicalIcon, ShieldCheckIcon, LightbulbIcon, UsersIcon, ScaleIcon, LeafIcon, type LucideIcon } from 'lucide-react';

const values: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: FlaskConicalIcon,
    title: 'Technical Excellence',
    description: 'We pride ourselves on being the technical authority in chemical solutions.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Safety First',
    description: 'The safety of our people and the environment is our non-negotiable priority.',
  },
  {
    Icon: LightbulbIcon,
    title: 'Innovation',
    description: 'We encourage creative thinking to solve complex industrial problems.',
  },
  {
    Icon: UsersIcon,
    title: 'Customer-Centricity',
    description: 'Everything we do is designed to add measurable value to our clients.',
  },
  {
    Icon: ScaleIcon,
    title: 'Integrity & Accountability',
    description: 'We operate with transparency and take ownership of our results.',
  },
  {
    Icon: LeafIcon,
    title: 'Sustainability',
    description: 'Building a legacy that respects the future of our planet.',
  },
];

const CareersAdvantage: React.FC = () => (
  <section id="advantage">
    {/* Mobile */}
    <div className="md:hidden bg-white px-6 py-16 flex flex-col gap-10 text-left">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="font-bold text-accent text-[28px] leading-10.5">The Eunisell Advantage</h2>
        <p className="text-card-foreground text-[15px] leading-[22.5px]">Our values empower every employee to excel.</p>
      </div>
      <div className="grid gap-6">
        {values.map(({ Icon, title, description }) => (
          <div key={title} className="border border-border p-6 flex flex-col gap-4">
            <div className="size-6 flex items-center justify-center">
              <Icon size={20} className="text-secondary" />
            </div>
            <h3 className="font-bold text-accent text-[20px] leading-7.5">{title}</h3>
            <p className="text-card-foreground text-[14px] leading-5.25">{description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden md:block bg-white py-24 px-30 text-left">
      <div className="max-w-[1776px]">
        <div className="flex flex-col items-center text-center mb-18">
          <h2 className="font-bold text-accent text-[40px] leading-15">The Eunisell Advantage</h2>
          <p className="text-card-foreground text-[16px] leading-6 mt-4 max-w-175">Our culture is built on values that empower every employee to excel and innovate.</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {values.map(({ Icon, title, description }) => (
            <div key={title} className="border border-border p-8 flex flex-col gap-4">
              <div className="size-8 flex items-center justify-center">
                <Icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-bold text-accent text-[22px] leading-8.25">{title}</h3>
              <p className="text-card-foreground text-[16px] leading-6 mt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CareersAdvantage;
