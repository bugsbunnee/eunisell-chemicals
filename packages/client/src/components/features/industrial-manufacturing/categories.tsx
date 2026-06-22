import React from 'react';

import { BrushCleaningIcon, DropletIcon, FlaskConical } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

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
      <div className="grid grid-cols-2">
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

      <div className="grid grid-cols-3 p-30 gap-x-12 items-start text-left">
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
