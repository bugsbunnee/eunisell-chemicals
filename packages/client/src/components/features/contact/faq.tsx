import type React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { paths } from '../../../lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

const faqs = [
  {
    question: 'How do I request a Technical Data Sheet (TDS)?',
    answer:
      'Minimum order quantities vary by product. Most bulk industrial chemicals start at 200 litres or 200 kg. Specialty oilfield chemicals may have lower MOQs. Contact our sales team for product-specific details.',
  },
  {
    question: 'What is the standard lead time for industrial delivery?',
    answer:
      'Yes. TDS and SDS documents are available for all products in our catalogue. You can request them via the Product Enquiries department or download them directly from our technical documentation portal.',
  },
  {
    question: 'Do you provide on-site laboratory testing?',
    answer:
      'Standard delivery within Nigeria is 3–5 business days. For bulk orders or remote oilfield locations, lead times are 7–14 business days depending on logistics requirements. Emergency supply requests are handled on a priority basis.',
  },
  {
    question: 'Are Eunisell chemicals ISO certified?',
    answer:
      'Yes. Our R&D and lab services team handles bespoke formulation projects. Submit a detailed enquiry through the Lab Services department with your process conditions and performance targets, and a senior engineer will reach out within 24 hours.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-30 md:py-24 bg-card relative flex flex-col md:grid md:grid-cols-[1fr_2fr] md:gap-x-24">
      {/* Mobile heading */}
      <div className="md:hidden text-center mb-8">
        <h2 className="text-[24px] font-bold text-accent leading-8">Frequently Asked</h2>
        <div className="w-12 h-1 bg-secondary mx-auto mt-3" />
      </div>

      {/* Desktop left column */}
      <div className="hidden md:block space-y-6 text-left">
        <div className="text-[36px] leading-10 text-accent font-bold">Common Enquiries</div>
        <p className="text-primary text-base leading-6 font-normal">Quick answers to procedural questions regarding our chemical supply and technical services.</p>
        <Link to={paths.brochures} className="text-base leading-6 font-bold text-primary flex items-center gap-x-3">
          View Technical Docs <FaFilePdf size={16} />
        </Link>
      </div>

      {/* Mobile: simple stacked cards */}
      <div className="md:hidden flex flex-col gap-4">
        {faqs.slice(0, 3).map((faq, index) => (
          <div key={index} className="bg-background border border-border rounded-[2px] p-6">
            <div className="text-accent font-bold text-[16px] leading-6">{faq.question}</div>
            <p className="text-primary text-sm leading-5 mt-3">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Desktop: accordion */}
      <Accordion type="single" collapsible className="hidden md:block w-full text-left">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-accent font-bold text-xl leading-7 hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-primary text-sm leading-6">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
