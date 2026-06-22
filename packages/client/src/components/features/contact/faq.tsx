import type React from 'react';
import { FaFilePdf } from 'react-icons/fa';
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
    <section className="px-30 py-24 bg-background relative grid grid-cols-[1fr_2fr] gap-x-24">
      <div className="space-y-6 text-left">
        <div className="text-[36px] leading-10 text-accent font-bold">Common Enquiries</div>
        <p className="text-primary text-base leading-6 font-normal">
          Quick answers to procedural questions regarding our chemical supply and technical services.
        </p>
        <button className="text-base leading-6 font-bold text-primary flex items-center gap-x-3">
          View Technical Docs <FaFilePdf size={16} />
        </button>
      </div>

      <Accordion type="single" collapsible className="w-full text-left">
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
