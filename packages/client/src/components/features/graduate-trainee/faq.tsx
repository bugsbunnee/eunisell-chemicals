import React from 'react';

const faqs = [
  {
    question: 'When does the Graduate Trainee Programme open?',
    answer: 'Applications are announced on our Careers page and official social media platforms.',
  },
  {
    question: 'How long is the programme?',
    answer: 'The duration of the programme is 2 years.',
  },
  {
    question: 'Do I need previous work experience?',
    answer: 'No. The Graduate Trainee Programme is designed for recent graduates who are beginning their professional careers.',
  },
  {
    question: 'Can graduates from different disciplines apply?',
    answer:
      'Yes. Depending on business requirements, opportunities may be available for graduates in engineering, sciences, business, finance, marketing, human resources, information technology, and other relevant disciplines.',
  },
];

const Faq: React.FC = () => {
  const items = faqs.map((faq) => (
    <div key={faq.question} className="border border-muted/30 rounded-xs p-6 md:p-8 flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-medium text-[16px] md:text-[18px] leading-7 text-accent">{faq.question}</h3>
        <img src="/graduate-trainee/chevron-down.svg" alt="" className="size-3.5 shrink-0" />
      </div>
      <p className="font-light text-[14px] leading-5 text-muted-foreground">{faq.answer}</p>
    </div>
  ));

  return (
    <section className="bg-background text-left">
      {/* Mobile layout */}
      <div className="md:hidden px-6 py-16 flex flex-col gap-8">
        <h2 className="font-light text-[28px] leading-9 text-accent text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6">{items}</div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-16 max-w-250 mx-auto px-10 py-24 w-full">
        <h2 className="font-light text-[36px] leading-10 text-accent text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6">{items}</div>
      </div>
    </section>
  );
};

export default Faq;
