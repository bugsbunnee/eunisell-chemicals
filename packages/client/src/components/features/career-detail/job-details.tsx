import React from 'react';

interface JobDetailsProps {
  department: string;
  location: string;
  employmentType: string;
  experienceLevel: string;
  deadline: string;
  workMode: string;
  reportingTo: string;
  travelRequirement: string;
}

interface DetailCellProps {
  label: string;
  value: string;
  valueClass?: string;
}

const DetailCell: React.FC<DetailCellProps> = ({ label, value, valueClass = 'text-accent' }) => (
  <div className="bg-white flex flex-col gap-2 p-8">
    <span className="font-bold text-[#777] text-[10px] uppercase tracking-[0.5px]">{label}</span>
    <span className={`font-bold text-[18px] leading-7 ${valueClass}`}>{value}</span>
  </div>
);

const JobDetails: React.FC<JobDetailsProps> = ({
  department,
  location,
  employmentType,
  experienceLevel,
  deadline,
  workMode,
  reportingTo,
  travelRequirement,
}) => (
  <section className="py-24 px-30">
    <div className="max-w-[1680px]">
      <div className="grid grid-cols-4 grid-rows-2 gap-px bg-[#e8e8e8] rounded-[8px] overflow-hidden border border-[#e8e8e8]">
        <DetailCell label="Department" value={department} />
        <DetailCell label="Primary Location" value={location} />
        <DetailCell label="Employment Type" value={employmentType} />
        <DetailCell label="Experience Level" value={experienceLevel} />
        <DetailCell label="Application Deadline" value={deadline} valueClass="text-[#d00416]" />
        <DetailCell label="Work Mode" value={workMode} />
        <DetailCell label="Reporting To" value={reportingTo} />
        <DetailCell label="Travel Requirement" value={travelRequirement} />
      </div>
    </div>
  </section>
);

export default JobDetails;
