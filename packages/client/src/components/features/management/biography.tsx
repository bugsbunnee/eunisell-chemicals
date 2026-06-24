import React, { useState } from 'react';
import { CheckCircleIcon, ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import { team } from '../../../lib/data';
import { cn } from '../../../lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

const Biography: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-6 md:py-24 md:px-30 text-left bg-background">
      <div className="md:hidden">
        <h2 className="font-bold text-[24px] leading-9 text-accent mb-8 text-left">Executive Biographies</h2>

        <Accordion type="single" collapsible defaultValue="bio-0" className="flex flex-col gap-4">
          {team.map((member, index) => (
            <AccordionItem key={member.name} value={`bio-${index}`} className="border border-[#e8e8e8] rounded-[2px] overflow-hidden group/bio">
              <AccordionTrigger className="bg-[#f6f9fc] px-5 py-5 hover:no-underline hover:bg-[#f6f9fc] [&>svg]:hidden w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-[16px] leading-[24px] text-accent">{member.name}</span>
                  <ChevronDownIcon size={12} className="text-[#333] shrink-0 hidden group-data-[state=open]/bio:block" />
                  <ChevronRightIcon size={12} className="text-[#333] shrink-0 group-data-[state=open]/bio:hidden" />
                </div>
              </AccordionTrigger>

              <AccordionContent className="p-0">
                {member.paragraphs.length > 0 ? (
                  <div className="px-6 pb-6">
                    <div className="h-[240px] rounded-[2px] overflow-hidden mt-6">
                      <img src={member.src} alt={member.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-6 space-y-4">
                      {member.paragraphs.slice(0, 2).map((paragraph, i) => (
                        <p key={i} className="text-sm font-normal text-card-foreground leading-[22.75px]">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>

                    {member.highlights.length > 0 && (
                      <div className="mt-4 bg-accent rounded-[2px] p-5 space-y-3">
                        <div className="text-[16px] leading-[24px] font-bold text-white">Highlights</div>
                        <div className="space-y-2">
                          {member.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center gap-x-3">
                              <CheckCircleIcon size={13} className="text-secondary shrink-0" />
                              <div className="text-[13px] leading-[19.5px] text-white">{highlight}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="px-6 py-4">
                    <p className="text-sm text-card-foreground leading-[22px]">{member.description}</p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden md:block">
        <div className="flex items-center border-b border-sidebar-accent/30">
          {team.map((member, index) => (
            <button
              key={member.name}
              onClick={() => setActiveIndex(index)}
              className={cn({
                'text-base leading-6 py-6 px-12': true,
                'text-card-foreground font-medium': index !== activeIndex,
                'bg-card text-accent font-bold border-b-4 border-secondary': index === activeIndex,
              })}
            >
              {member.name}
            </button>
          ))}
        </div>

        {team[activeIndex] && (
          <div className="mt-16 text-left grid grid-cols-2 gap-x-20">
            <div>
              <div className="min-h-150 rounded-[2px] overflow-hidden">
                <img src={team[activeIndex].src} alt={team[activeIndex].name} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 bg-accent mt-8 text-left rounded-[2px]">
                <div className="text-xl leading-7.5 font-bold text-white">Product Highlights</div>

                <div className="space-y-4 mt-4">
                  {team[activeIndex].highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-x-3">
                      <CheckCircleIcon className="text-secondary" />
                      <div className="font-regular text-sm leading-5.25 text-white">{highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="text-[40px] text-accent leading-15 font-bold">{team[activeIndex].name}</div>
              <div className="mt-2 capitalize text-lg font-semibold tracking-[3px] leading-6.75 text-secondary">{team[activeIndex].title}</div>

              <div className="space-y-6 mt-8">
                {team[activeIndex].paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-lg font-normal text-card-foreground leading-[29.3px] max-w-150">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Biography;
