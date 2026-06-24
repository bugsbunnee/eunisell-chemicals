import React from 'react';

const topics = [
  { title: 'Industrial Chemicals', count: '12 Articles' },
  { title: 'Oilfield Chemicals', count: '18 Articles' },
  { title: 'Water Treatment', count: '9 Articles' },
  { title: 'Sustainability', count: '7 Articles' },
];

const BlogTopics: React.FC = () => {
  return (
    <section className="bg-card py-20 px-30 text-left">
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-accent text-[24px] leading-9">Popular Topics</h2>

        <div className="grid grid-cols-4 gap-6">
          {topics.map(({ title, count }) => (
            <div key={title} className="bg-white border border-[#e8e8e8] relative h-30 cursor-pointer hover:shadow-sm transition-shadow">
              <h4 className="absolute left-6 top-6 font-bold text-accent text-[16px] leading-6">{title}</h4>
              <p className="absolute left-6 top-14.75 text-[#777] text-[13px] leading-5">{count}</p>
              <div className="absolute left-6 bottom-7 w-8 h-0.5 bg-secondary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTopics;
