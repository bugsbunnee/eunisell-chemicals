import type React from 'react';
import type { SystemTool } from '../../../lib/entities';

interface Props {
  tools: SystemTool[];
}

const CmsSystemTools: React.FC<Props> = ({ tools }) => (
  <div className="bg-accent rounded-[8px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4">
    <h3 className="text-[12px] text-secondary uppercase tracking-[1.2px] leading-4">System Tools</h3>

    <div className="grid grid-cols-2 gap-3">
      {tools.map(({ icon: Icon, label, onClick }) => (
        <button key={label} onClick={onClick} className="bg-[#002a49] rounded-[4px] py-4 flex flex-col items-center gap-5 hover:bg-[#003560] transition-colors">
          <Icon size={16} className="text-white" />
          <span className="text-[10px] text-white text-center leading-3">{label}</span>
        </button>
      ))}
    </div>
  </div>
);

export default CmsSystemTools;
