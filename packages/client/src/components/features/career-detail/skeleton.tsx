import React from 'react';

const bar = 'bg-[#f0f0f0] rounded';

const CareerDetailSkeleton: React.FC = () => (
  <div className="animate-pulse">
    {/* Hero */}
    <section className="bg-card border-b border-border text-left py-16 px-6 md:px-30">
      <div className="max-w-[1680px]">
        <div className="flex items-center gap-2 mb-6">
          <div className={`${bar} h-3 w-12`} />
          <div className={`${bar} h-3 w-3`} />
          <div className={`${bar} h-3 w-16`} />
          <div className={`${bar} h-3 w-3`} />
          <div className={`${bar} h-3 w-32`} />
        </div>

        <div className={`${bar} h-6 w-32 mb-6`} />
        <div className={`${bar} h-12 w-full md:w-3/4 mb-6`} />
        <div className={`${bar} h-5 w-full max-w-200 mb-2`} />
        <div className={`${bar} h-5 w-2/3 max-w-200 mb-8`} />

        <div className="flex flex-wrap gap-3 mb-10">
          {[28, 32, 24, 28, 36].map((w, i) => (
            <div key={i} className={`${bar} h-9 rounded-full`} style={{ width: `${w * 4}px` }} />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className={`${bar} h-14 w-48`} />
          <div className={`${bar} h-14 w-40`} />
        </div>
      </div>
    </section>

    {/* Job details grid */}
    <section className="py-12 md:py-24 px-6 md:px-30">
      <div className="max-w-[1680px]">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-px bg-[#e8e8e8] rounded-[8px] overflow-hidden border border-[#e8e8e8]">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-white flex flex-col gap-3 p-6 md:p-8">
              <div className={`${bar} h-2.5 w-16`} />
              <div className={`${bar} h-5 w-24`} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Role content */}
    <section className="py-12 md:py-24 px-6 md:px-30 text-left">
      <div className="max-w-[1680px] grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-16">
        <div className="flex flex-col gap-16">
          <div>
            <div className={`${bar} h-7 w-48 mb-6`} />
            <div className="flex flex-col gap-3">
              <div className={`${bar} h-4 w-full`} />
              <div className={`${bar} h-4 w-full`} />
              <div className={`${bar} h-4 w-2/3`} />
            </div>
          </div>

          <div>
            <div className={`${bar} h-7 w-56 mb-8`} />
            <div className="flex flex-col gap-6">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`${bar} w-6 h-6 rounded-full shrink-0`} />
                  <div className="flex flex-col gap-2 w-full">
                    <div className={`${bar} h-5 w-40`} />
                    <div className={`${bar} h-4 w-full`} />
                    <div className={`${bar} h-4 w-5/6`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-accent/90 rounded-[10px] p-10 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10" />
          <div className="h-6 w-40 bg-white/10 rounded" />
          <div className="h-4 w-full bg-white/10 rounded" />
          <div className="h-4 w-5/6 bg-white/10 rounded" />
          <div className="flex flex-col gap-3 pt-4">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="h-3 w-3/4 bg-white/10 rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Requirements */}
    <section className="bg-card py-12 md:py-24 px-6 md:px-30">
      <div className="max-w-[1680px] mx-auto flex flex-col gap-12">
        <div className={`${bar} h-7 w-72 mx-auto`} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="bg-white border border-[#e8e8e8] rounded-[8px] p-8 flex flex-col gap-4">
              <div className={`${bar} w-8 h-8 rounded-full`} />
              <div className={`${bar} h-5 w-20`} />
              <div className={`${bar} h-4 w-full`} />
              <div className={`${bar} h-4 w-4/5`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default CareerDetailSkeleton;
