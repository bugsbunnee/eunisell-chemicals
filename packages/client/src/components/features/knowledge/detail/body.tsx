import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';

const ArticleBody: React.FC = () => {
  return (
    <div className="w-full mx-auto px-30 py-20 text-left">
      <div className="grid items-start" style={{ gridTemplateColumns: '744px 1fr', gap: '72px' }}>
        <article>
          <h2 className="font-bold text-foreground text-[32px] leading-[1.2] mb-6">The Evolution of Industrial Chemical Management</h2>

          <p className="text-muted-foreground text-[16px] leading-[1.75]">
            In the modern industrial landscape, chemical management has moved far beyond simple procurement. It has become a strategic lever for
            operational excellence. At Eunisell Chemicals, we recognize that every facility has a unique fingerprint—varying temperatures, pressures,
            and mechanical stresses that demand more than off-the-shelf solutions.
          </p>

          <h3 className="font-bold text-accent text-[22px] leading-[1.3] mt-11 mb-4">Optimizing Through Precision Chemistry</h3>

          <p className="text-muted-foreground text-[16px] leading-[1.75]">
            Our approach begins with deep technical diagnostics. By analyzing the specific friction points within a production line, we can engineer
            additives and process chemicals that not only solve immediate issues like scaling or corrosion but actively improve the thermodynamic
            efficiency of the entire system.
          </p>

          {/* Blockquote */}
          <blockquote className="mt-10 mb-10 border-l-4 border-secondary bg-[#f8fafc] pl-8 pr-8 py-[30px]">
            <p className="text-foreground text-[18px] leading-[1.7] italic">
              "The integration of IoT sensors with chemical dosing systems is no longer the future—it is the baseline for competitive manufacturing."
            </p>
            <cite className="block mt-4 text-secondary text-[14px] font-medium not-italic">— Dr. Marcus Chen, Chief Technical Officer</cite>
          </blockquote>

          <h3 className="font-bold text-secondary text-[22px] leading-[1.3] mt-11 mb-5">Key Operational Benefits</h3>

          <ul className="flex flex-col gap-4">
            {[
              {
                label: 'Extended Asset Life:',
                text: 'Reducing oxidative stress on machinery through superior lubrication and coating chemistry.',
              },
              {
                label: 'Energy Conservation:',
                text: 'Lowering surface tension in heat exchangers to maximize thermal transfer.',
              },
              {
                label: 'Compliance Assurance:',
                text: 'Formulations designed to exceed environmental regulations without sacrificing potency.',
              },
            ].map(({ label, text }) => (
              <li key={label} className="flex items-start gap-3">
                <CheckIcon size={14} className="text-secondary mt-[5px] shrink-0" />
                <span className="text-muted-foreground text-[16px] leading-[1.75]">
                  <strong className="text-foreground font-bold">{label}</strong> {text}
                </span>
              </li>
            ))}
          </ul>

          {/* In-article image */}
          <div className="mt-10 mb-10 h-[417px] overflow-hidden">
            <img src="/solutions/lab.svg" alt="Chemical laboratory analysis" className="w-full h-full object-cover" />
          </div>

          <h3 className="font-bold text-secondary text-[22px] leading-[1.3] mb-4">Future-Proofing Your Operations</h3>

          <p className="text-muted-foreground text-[16px] leading-[1.75]">
            Sustainability is the new cornerstone of industrial chemical performance. Tailored programmes now include biodegradable options and
            closed-loop systems that minimize waste stream impact while maintaining the high performance required for heavy industry.
          </p>
        </article>

        {/* ── Sidebar ── */}
        <aside className="flex flex-col gap-8 sticky top-8">
          {/* Resource Details */}
          <div className="border border-border p-6">
            <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-muted-foreground pb-5 border-b border-border mb-5">
              Resource Details
            </p>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Type', value: 'Technical Paper' },
                { label: 'Sector', value: 'Industrial & Manufacturing' },
                { label: 'Subject', value: 'Chemical Engineering' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[11px] uppercase tracking-[1.4px] text-muted-foreground/70 mb-0.5">{label}</p>
                  <p className="font-semibold text-foreground text-[15px] leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Solution */}
          <div className="bg-accent p-6">
            <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-secondary mb-3">Related Solution</p>
            <h4 className="font-bold text-white text-[22px] leading-[1.25] mb-3">Industrial &amp; Manufacturing Chemicals</h4>
            <p className="text-white/55 text-[14px] leading-[1.6] mb-6">
              Comprehensive chemical solutions designed for high-intensity industrial applications.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-white text-[15px] hover:gap-3 transition-all">
              Learn More
              <ArrowRightIcon size={14} />
            </a>
          </div>

          {/* Share */}
          <div className="flex items-center justify-between pt-1 border-t border-border">
            <span className="text-foreground text-[14px]">Share this article:</span>
            <div className="flex items-center gap-3">
              {[
                { label: 'in', color: '#0A66C2' },
                { label: 'f', color: '#1877F2' },
                { label: 'G', color: '#4285F4' },
              ].map(({ label, color }) => (
                <button
                  key={label}
                  style={{ color }}
                  className="w-5 h-5 flex items-center justify-center text-[13px] font-bold hover:opacity-70 transition-opacity"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleBody;
