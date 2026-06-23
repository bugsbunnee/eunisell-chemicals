import React from 'react';

const values = [
  {
    icon: 'https://www.figma.com/api/mcp/asset/468342a9-1577-4261-83cd-245e4121187f',
    title: 'Technical Excellence',
    description: 'We pride ourselves on being the technical authority in chemical solutions.',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/adef643b-8895-403d-aa51-72fc6f3b17f1',
    title: 'Safety First',
    description: 'The safety of our people and the environment is our non-negotiable priority.',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/c64b22f3-02c3-440f-8d95-5cb6ea4e5f59',
    title: 'Innovation',
    description: 'We encourage creative thinking to solve complex industrial problems.',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/9fd85c08-0510-4607-9efc-c901f6b5b8ce',
    title: 'Customer-Centricity',
    description: 'Everything we do is designed to add measurable value to our clients.',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/81a0f126-1ba2-4d89-8fec-97d79f3c8c6d',
    title: 'Integrity & Accountability',
    description: 'We operate with transparency and take ownership of our results.',
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/f5917f6d-5651-4e66-9259-9d62c54488d5',
    title: 'Sustainability',
    description: 'Building a legacy that respects the future of our planet.',
  },
];

const CareersAdvantage: React.FC = () => (
  <section className="bg-white py-24 px-30 text-left">
    <div className="max-w-[1776px]">
      <div className="flex flex-col items-center text-center mb-[72px]">
        <h2 className="font-bold text-accent text-[40px] leading-[60px]">The Eunisell Advantage</h2>
        <p className="text-[#606060] text-[16px] leading-[24px] mt-4 max-w-[700px]">
          Our culture is built on values that empower every employee to excel and innovate.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {values.map((v) => (
          <div key={v.title} className="border border-[#e8e8e8] p-8 flex flex-col gap-4">
            <img src={v.icon} alt={v.title} className="w-8 h-8 object-contain" />
            <h3 className="font-bold text-accent text-[22px] leading-[33px]">{v.title}</h3>
            <p className="text-[#606060] text-[16px] leading-[24px] mt-4">{v.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareersAdvantage;
