import React from 'react';

import { BrushCleaningIcon, DropletIcon, FlaskConical, PlusIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';

const categories = [
  {
    id: 'Category 01',
    title: 'Water Treatment',
  },
  {
    id: 'Category 02',
    title: 'Cleaning & Maintenance',
  },
  {
    id: 'Category 03',
    title: 'Specialty Industrial Chemicals',
  },
  {
    id: 'Category 04',
    title: 'Supply and Distribution',
  },
];

const columns = [
  {
    Icon: DropletIcon,
    title: 'Water Treatment',
    items: [
      {
        id: 'wt-1',
        trigger: 'Coagulants & Flocculants',
        content:
          'Aluminum sulfate, polyaluminum chloride, and polymer flocculants for suspended solid removal in industrial and municipal water systems.',
      },
      {
        id: 'wt-2',
        trigger: 'Biocides & Disinfectants',
        content:
          'Phosphonate and polymer-based inhibitors that protect cooling towers, boilers, and process water systems from scaling and corrosive attack.',
      },
      {
        id: 'wt-3',
        trigger: 'Anti-Scalants',
        content:
          'Oxidizing and non-oxidizing biocides including chlorine dioxide and isothiazolone blends for microbiological control in process water.',
      },
      {
        id: 'wt-4',
        trigger: 'Corrosion Inhibitors',
        content: 'Caustic soda, sulfuric acid, and carbon dioxide dosing systems for precise pH management in water treatment processes.',
      },
      {
        id: 'wt-5',
        trigger: 'pH Regulators',
        content: 'Caustic soda, sulfuric acid, and carbon dioxide dosing systems for precise pH management in water treatment processes.',
      },
    ],
  },
  {
    Icon: BrushCleaningIcon,
    title: 'Cleaning & Maintenance',
    items: [
      {
        id: 'cm-1',
        trigger: 'Industrial Degreasers',
        content:
          'Solvent and aqueous-based degreasers formulated for heavy-duty removal of grease, oil, and carbon deposits from industrial equipment.',
      },
      {
        id: 'cm-2',
        trigger: 'Descaling Agents',
        content:
          'Inhibited hydrochloric, citric, and sulfamic acid blends for safe and effective scale removal from heat exchangers, pipelines, and vessels.',
      },
      {
        id: 'cm-3',
        trigger: 'Surface Passivators',
        content:
          'High-performance caustic and neutral alkaline formulations for CIP processes, food-grade facilities, and general industrial surface cleaning.',
      },
      {
        id: 'cm-4',
        trigger: 'Solvent Cleaners',
        content:
          'Rust converters, protective coatings, penetrating oils, and release agents that extend asset life and reduce unplanned maintenance downtime.',
      },
      {
        id: 'cm-5',
        trigger: 'Biological Cleaners',
        content:
          'Rust converters, protective coatings, penetrating oils, and release agents that extend asset life and reduce unplanned maintenance downtime.',
      },
    ],
  },
  {
    Icon: FlaskConical,
    title: 'Specialty Chemicals',
    items: [
      {
        id: 'sc-1',
        trigger: 'Process Solvents',
        content:
          'Anti-foams, emulsifiers, dispersants, and wetting agents that optimize reaction efficiency and product quality in industrial manufacturing processes.',
      },
      {
        id: 'sc-2',
        trigger: 'Acids & Alkalis',
        content:
          'Cutting fluids, forming lubricants, and hydraulic oils formulated for precision metalworking, stamping, and heavy manufacturing operations.',
      },
      {
        id: 'sc-3',
        trigger: 'Catalysts & Accelerators',
        content:
          'A curated portfolio of aliphatic, aromatic, and oxygenated solvents for coatings, cleaning, extraction, and chemical synthesis applications.',
      },
      {
        id: 'sc-4',
        trigger: 'Specialty Intermediates',
        content:
          'High-purity reagents, standards, and indicator solutions for quality control laboratories across pharmaceutical, food, and industrial sectors.',
      },
      {
        id: 'sc-5',
        trigger: 'Laboratory Reagents',
        content:
          'High-purity reagents, standards, and indicator solutions for quality control laboratories across pharmaceutical, food, and industrial sectors.',
      },
    ],
  },
];

const Categories: React.FC = () => {
  return (
    <section>
      {/* Desktop: image + categories grid */}
      <div className="hidden md:grid grid-cols-2">
        <div className="h-175">
          <img src="/industrial-manufacturing/categories.svg" alt="Industrial chemical laboratory" className="w-full h-full object-cover" />
        </div>
        <div className="bg-background p-30 text-left">
          <h2 className="font-bold text-4xl leading-10 text-accent">Chemical Segments</h2>
          <div className="mt-12 grid grid-cols-2 gap-12">
            {categories.map((cat) => (
              <div key={cat.id} className="border-b border-border py-4 space-y-2">
                <div className="font-bold uppercase text-sm leading-5 text-secondary tracking-[1.4px]">{cat.id}</div>
                <div className="font-bold text-2xl leading-8 text-accent mb-3">{cat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden px-6 py-16 bg-white text-left">
        <h2 className="font-bold text-[24px] leading-[30px] text-accent mb-6">Chemical Segments</h2>

        <Accordion type="single" collapsible defaultValue="col-0">
          {columns.map((column, i) => (
            <AccordionItem key={column.title} value={`col-${i}`} className="border-[#e8e8e8] group/item">
              <AccordionTrigger className="font-bold text-[18px] leading-7 text-accent py-6 hover:no-underline [&>svg]:hidden">
                <span className="flex-1 text-left">{column.title}</span>
                <ChevronDownIcon size={16} className="text-secondary hidden group-data-[state=open]/item:block shrink-0" />
                <ChevronRightIcon size={16} className="text-muted-foreground group-data-[state=open]/item:hidden shrink-0" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 pb-4">
                  {column.items.map((item) => (
                    <div key={item.id} className="bg-[#f6f9fc] flex items-center justify-between px-3 py-2 rounded-[4px]">
                      <span className="text-sm text-[#333] leading-5">{item.trigger}</span>
                      <PlusIcon size={12} className="text-secondary shrink-0" />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Supply and Distribution — no sub-items */}
        <div className="border-t border-[#e8e8e8] py-6 flex items-center justify-between">
          <span className="font-bold text-[18px] leading-7 text-accent">Supply and Distribution</span>
          <ChevronRightIcon size={16} className="text-muted-foreground shrink-0" />
        </div>
      </div>

      {/* Desktop: 3-col accordion */}
      <div className="hidden md:grid grid-cols-3 p-30 gap-x-12 items-start text-left">
        {columns.map((column) => (
          <div key={column.title}>
            <div className="mb-10 flex items-center gap-x-4">
              <div className="w-10 h-10 rounded-[2px] bg-secondary text-white flex items-center justify-center">
                <column.Icon />
              </div>
              <h3 className="text-2xl leading-8 font-bold text-accent">{column.title}</h3>
            </div>
            <Accordion type="single" collapsible>
              {column.items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-[#333333] font-medium text-base flex items-center hover:no-underline">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-card-foreground text-sm leading-relaxed">{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
