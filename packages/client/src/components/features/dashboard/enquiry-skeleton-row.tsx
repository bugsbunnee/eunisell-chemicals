import React from 'react';

const EnquirySkeletonRow: React.FC = () => (
  <tr className="animate-pulse">
    <td className="py-3 pr-4">
      <div className="h-3 bg-[#f0f0f0] rounded w-28 mb-1.5" />
      <div className="h-2.5 bg-[#f0f0f0] rounded w-20" />
    </td>
    <td className="py-3 pr-4">
      <div className="h-3 bg-[#f0f0f0] rounded w-24" />
    </td>
    <td className="py-3 pr-4">
      <div className="h-5 bg-[#f0f0f0] rounded w-14" />
    </td>
    <td className="py-3 pr-4">
      <div className="h-3 bg-[#f0f0f0] rounded w-16" />
    </td>
    <td className="py-3">
      <div className="h-3 bg-[#f0f0f0] rounded w-10" />
    </td>
  </tr>
);

export default EnquirySkeletonRow;
