import type React from 'react';
import type { StatusConfig } from '../../../lib/entities';

const CmsStatusBadge: React.FC<StatusConfig> = ({ label, bg, border, text }) => (
  <span className="inline-flex items-center px-2 py-[2.5px] rounded-full text-[11px] border whitespace-nowrap" style={{ backgroundColor: bg, borderColor: border, color: text }}>
    {label}
  </span>
);

export default CmsStatusBadge;
