import React from 'react';

const topics = [
  { title: 'Industrial', count: '12 Articles' },
  { title: 'Oilfield', count: '18 Articles' },
  { title: 'Water', count: '9 Articles' },
  { title: 'Sustainability', count: '7 Articles' },
];

const BlogTopics: React.FC = () => {
  return (
    <section className="bg-card px-6 py-16 md:py-20 md:px-30 text-left">
      <div className="flex flex-col gap-8 md:gap-10">
        <h2 className="font-bold text-accent text-[22px] leading-[33px] md:text-[24px] md:leading-9">Popular Topics</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topics.map(({ title, count }) => (
            <div
              key={title}
              className="bg-white border border-[#e8e8e8] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-5 flex flex-col gap-2 cursor-pointer hover:shadow-sm transition-shadow"
            >
              <h4 className="font-bold text-accent text-sm leading-[21px]">{title}</h4>
              <p className="text-[#777] text-[11px] uppercase tracking-[0.275px]">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTopics;
