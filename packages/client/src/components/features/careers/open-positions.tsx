import React, { useState } from 'react';
import { MapPinIcon, BriefcaseIcon, SearchIcon } from 'lucide-react';

const positions = [
  { title: 'Technical Services Specialist', location: 'Lagos, Nigeria', type: 'Full-time' },
  { title: 'Laboratory Analyst', location: 'Port Harcourt', type: 'Full-time' },
  { title: 'Graduate Trainee - Engineering', location: 'Abuja', type: 'Contract' },
  { title: 'QHSE Lead', location: 'Lagos, Nigeria', type: 'Full-time' },
];

const departments = ['All Departments', 'Technical Services', 'Laboratory', 'Engineering', 'QHSE'];

const OpenPositions: React.FC = () => {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All Departments');

  const filtered = positions.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id="open-positions" className="bg-white py-24 px-30 text-left">
      <div className="max-w-[1776px]">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-bold text-accent text-[40px] leading-[60px]">Open Positions</h2>
            <p className="text-[#606060] text-[16px] leading-[24px] mt-2">Find the role that matches your expertise.</p>
          </div>
          <div className="flex gap-4 items-center">
            {/* Search */}
            <div className="relative">
              <SearchIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search roles..."
                className="w-[300px] h-12 bg-white border border-[#e8e8e8] rounded-[4px] pl-10 pr-4 text-[16px] text-foreground placeholder:text-[#9ca3af] outline-none focus:border-secondary/50 transition-colors"
              />
            </div>
            {/* Department */}
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="h-12 border border-[#e8e8e8] rounded-[4px] px-5 text-[16px] text-[#606060] bg-white outline-none appearance-none cursor-pointer focus:border-secondary/50 pr-10"
            >
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Job grid */}
        <div className="grid grid-cols-2 gap-6">
          {filtered.map((pos) => (
            <div
              key={pos.title}
              className="flex items-center justify-between bg-white border border-[#e8e8e8] rounded-[4px] p-8 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
            >
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-accent text-[20px] leading-[30px]">{pos.title}</h4>
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-2 text-[#606060] text-[14px]">
                    <MapPinIcon size={11} className="text-[#606060]" />
                    {pos.location}
                  </span>
                  <span className="flex items-center gap-2 text-[#606060] text-[14px]">
                    <BriefcaseIcon size={14} className="text-[#606060]" />
                    {pos.type}
                  </span>
                </div>
              </div>
              <button className="bg-card border border-[#e8e8e8] text-secondary font-bold text-[16px] px-6 py-3 rounded-[4px] hover:bg-card/70 transition-colors shrink-0">
                View Role
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
