import React from 'react';

const links = [
  {
    img: 'https://www.figma.com/api/mcp/asset/b8d690fe-8eac-4752-bc25-4898bc635db4',
    label: 'About Us',
    href: '/about',
  },
  {
    img: 'https://www.figma.com/api/mcp/asset/49707343-9617-41e2-ba83-1600185ed52f',
    label: 'Executive Management',
    href: '/management',
  },
  {
    img: 'https://www.figma.com/api/mcp/asset/9dc27300-6f79-4862-92fb-00116b2f6afb',
    label: 'QHSE',
    href: '/qhse',
  },
  {
    img: 'https://www.figma.com/api/mcp/asset/20fa2c68-7012-4c35-849a-db21f4091777',
    label: 'CSR',
    href: '/csr',
  },
];

const LearnMore: React.FC = () => (
  <section className="bg-white py-24 px-30 text-left">
    <div className="max-w-[1776px]">
      <h2 className="font-bold text-accent text-[24px] leading-[36px] mb-12">Learn More About Eunisell</h2>

      <div className="grid grid-cols-4 gap-6">
        {links.map((item) => (
          <a key={item.label} href={item.href} className="flex flex-col gap-4 group">
            <div className="h-[180px] rounded-[4px] overflow-hidden bg-card shrink-0">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <span className="font-bold text-accent text-[16px] leading-[24px] group-hover:text-secondary transition-colors">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default LearnMore;
