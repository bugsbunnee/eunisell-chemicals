import React, { useCallback, useEffect, useState } from 'react';
import http from '../../../../services/http';

import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { MapPinIcon, CalendarIcon, HistoryIcon, LoaderCircleIcon } from 'lucide-react';

import dayjs from '../../../../lib/dayjs';
import { useAppForm } from '../../../forms/app-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../../../ui/dialog';
import { Button } from '../../../ui/button';
import { cn, getErrorMessage, slugify } from '../../../../lib/utils';
import { useCareerOpening } from '../../../../hooks/use-career-openings';
import { DEPARTMENTS, CATEGORIES, EMPLOYMENT_TYPES, WORK_MODES, EXPERIENCE_LEVELS, STATUS_OPTIONS, CREATE_CAREER_TABS } from '../model/constants';
import { careerOpeningSchema, careerOpeningDefaultValues, type CareerOpeningInput } from '../model/schema';

import JobTextField from './job-text-field';
import JobSelectField from './job-select-field';
import JobDateField from './job-date-field';
import JobToggleField from './job-toggle-field';
import JobTextAreaField from './job-textarea-field';
import JobListField from './job-list-field';
import JobResponsibilitiesField from './job-responsibilities-field';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  careerId?: string;
}

const CreateCareerModal: React.FC<Props> = ({ open, onOpenChange, careerId }) => {
  const queryClient = useQueryClient();
  const isEditing = Boolean(careerId);
  const { data: existing, isLoading: isLoadingExisting } = useCareerOpening(careerId);
  const [activeTab, setActiveTab] = useState(0);

  const form = useAppForm({
    defaultValues: careerOpeningDefaultValues,
    onSubmit: async ({ value }) => {
      try {
        if (isEditing) {
          await http.put(`/api/v1/careers/${careerId}`, value);
        } else {
          await http.post('/api/v1/careers', value);
        }

        await queryClient.invalidateQueries({ queryKey: ['career-openings'] });
        await queryClient.invalidateQueries({ queryKey: ['career-stats'] });
        if (isEditing) await queryClient.invalidateQueries({ queryKey: ['career-opening-by-id', careerId] });

        toast.success(isEditing ? 'Career opening updated successfully' : value.status === 'DRAFT' ? 'Career opening saved as draft' : 'Career opening published successfully');

        form.reset();
        setActiveTab(0);
        onOpenChange(false);
      } catch (error) {
        toast.error(isEditing ? 'Failed to update the career opening' : 'Failed to save the career opening', { description: getErrorMessage(error) });
      }
    },
  });

  useEffect(() => {
    if (!existing) return;

    form.reset({
      title: existing.title,
      slug: existing.slug,
      department: existing.department,
      category: existing.category,
      location: existing.location,
      locationDetails: existing.locationDetails,
      jobType: existing.jobType,
      workMode: existing.workMode,
      level: existing.level,
      experienceRange: existing.experienceRange,
      reportingLine: existing.reportingLine,
      travelRequirement: existing.travelRequirement,
      postedDate: dayjs(existing.postedDate).format('YYYY-MM-DD'),
      deadline: dayjs(existing.deadline).format('YYYY-MM-DD'),
      status: existing.status,
      featured: existing.featured,
      aboutText: existing.aboutText,
      responsibilities: existing.responsibilities,
      highlights: existing.highlights,
      kpis: existing.kpis,
      educationRequirement: existing.educationRequirement,
      experienceRequirement: existing.experienceRequirement,
      skillsRequirement: existing.skillsRequirement,
      advantageRequirement: existing.advantageRequirement,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existing]);

  const onSubmit = useCallback(
    (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      form.handleSubmit();
    },
    [form]
  );

  const saveAs = useCallback(
    (status: CareerOpeningInput['status']) => {
      form.setFieldValue('status', status);
      form.handleSubmit();
    },
    [form]
  );

  const primaryAction = useCallback(() => {
    if (isEditing) form.handleSubmit();
    else saveAs('OPEN');
  }, [isEditing, form, saveAs]);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          form.reset();
          setActiveTab(0);
        }
        onOpenChange(next);
      }}
    >
      <DialogContent className="w-[calc(100%-2rem)] max-w-236 max-h-[85vh] p-0 flex flex-col gap-0">
        <DialogHeader className="p-8 pb-6 shrink-0">
          <DialogTitle>{isEditing ? 'Edit Career Opening' : 'Create New Career Opening'}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Update this job opportunity's details." : 'Add a new job opportunity and configure the content displayed on the public career detail page.'}
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-8 px-8 border-b border-[#e5e8ec] bg-[#fbfbfc] shrink-0">
          {CREATE_CAREER_TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(i)}
              className={cn(
                'py-4 text-sm border-b-2 -mb-px whitespace-nowrap transition-colors',
                i === activeTab ? 'border-secondary text-secondary' : 'border-transparent text-[#64748b] hover:text-accent'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {isEditing && isLoadingExisting ? (
          <div className="flex-1 flex items-center justify-center gap-2 text-[#94a3b8] py-24">
            <LoaderCircleIcon size={18} className="animate-spin" />
            Loading career opening…
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto p-8">
              {activeTab === 0 && (
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 items-start">
                  <form.AppField
                    name="title"
                    validators={{ onChange: careerOpeningSchema.shape.title }}
                    listeners={{
                      onChange: ({ value, fieldApi }) => {
                        if (!fieldApi.form.getFieldMeta('slug')?.isTouched) {
                          fieldApi.form.setFieldValue('slug', slugify(value), { dontUpdateMeta: true });
                        }
                      },
                    }}
                    children={() => <JobTextField label="Job Title" placeholder="e.g. Technical Sales Engineer" />}
                  />

                  <form.AppField
                    name="slug"
                    validators={{ onChange: careerOpeningSchema.shape.slug }}
                    children={() => <JobTextField label="Job Slug" placeholder="technical-sales-engineer" prefix="eunisell.com/careers/" />}
                  />

                  <form.AppField
                    name="department"
                    validators={{ onChange: careerOpeningSchema.shape.department }}
                    children={() => <JobSelectField label="Department" placeholder="Select Department" options={DEPARTMENTS} />}
                  />

                  <form.AppField
                    name="category"
                    validators={{ onChange: careerOpeningSchema.shape.category }}
                    children={() => <JobSelectField label="Job Category" placeholder="Select Category" options={CATEGORIES} />}
                  />

                  <form.AppField
                    name="location"
                    validators={{ onChange: careerOpeningSchema.shape.location }}
                    children={() => <JobTextField label="Location" placeholder="e.g. Lagos, Nigeria" icon={MapPinIcon} />}
                  />

                  <form.AppField name="locationDetails" children={() => <JobTextField label="Work Location Details" placeholder="e.g. Victoria Island" />} />

                  <form.AppField
                    name="jobType"
                    validators={{ onChange: careerOpeningSchema.shape.jobType }}
                    children={() => <JobSelectField label="Employment Type" placeholder="Select Type" options={EMPLOYMENT_TYPES} />}
                  />

                  <form.AppField
                    name="workMode"
                    validators={{ onChange: careerOpeningSchema.shape.workMode }}
                    children={() => <JobSelectField label="Work Mode" placeholder="Select Mode" options={WORK_MODES} />}
                  />

                  <form.AppField
                    name="level"
                    validators={{ onChange: careerOpeningSchema.shape.level }}
                    children={() => <JobSelectField label="Experience Level" placeholder="Select Level" options={EXPERIENCE_LEVELS} />}
                  />

                  <form.AppField
                    name="experienceRange"
                    validators={{ onChange: careerOpeningSchema.shape.experienceRange }}
                    children={() => <JobTextField label="Experience Range" placeholder="e.g. 5-10 Years" />}
                  />

                  <form.AppField name="reportingLine" children={() => <JobTextField label="Reporting Line" placeholder="e.g. General Manager, BD" />} />

                  <form.AppField name="travelRequirement" children={() => <JobTextField label="Travel Requirement" placeholder="e.g. Up to 40% Regional" />} />

                  <form.AppField
                    name="postedDate"
                    validators={{ onChange: careerOpeningSchema.shape.postedDate }}
                    children={() => <JobDateField label="Posted Date" icon={CalendarIcon} />}
                  />

                  <form.AppField
                    name="deadline"
                    validators={{
                      onChangeListenTo: ['postedDate'],
                      onChange: ({ value, fieldApi }) => {
                        const result = careerOpeningSchema.shape.deadline.safeParse(value);
                        if (!result.success) return result.error.issues[0]?.message;

                        const posted = fieldApi.form.getFieldValue('postedDate');
                        if (posted && value && new Date(value) <= new Date(posted)) return 'Closing date must be after the posted date';

                        return undefined;
                      },
                    }}
                    children={() => <JobDateField label="Closing Date" icon={CalendarIcon} />}
                  />

                  <form.AppField
                    name="status"
                    validators={{ onChange: careerOpeningSchema.shape.status }}
                    children={() => <JobSelectField label="Status" placeholder="Select Status" options={STATUS_OPTIONS} />}
                  />

                  <form.AppField name="featured" children={() => <JobToggleField label="Featured Role" />} />
                </div>
              )}

              {activeTab === 1 && (
                <div className="flex flex-col gap-8">
                  <form.AppField
                    name="aboutText"
                    children={() => (
                      <JobListField
                        label="About the Role"
                        placeholder="Write a paragraph about the role…"
                        addLabel="Add Paragraph"
                        emptyLabel="No paragraphs added yet."
                        multiline
                      />
                    )}
                  />

                  <form.AppField name="responsibilities" children={() => <JobResponsibilitiesField />} />

                  <form.AppField
                    name="highlights"
                    children={() => (
                      <JobListField
                        label="Why This Role Matters"
                        placeholder="e.g. Direct impact on regional revenue growth"
                        addLabel="Add Highlight"
                        emptyLabel="No highlights added yet."
                      />
                    )}
                  />
                </div>
              )}

              {activeTab === 2 && (
                <div className="flex flex-col gap-6">
                  <form.AppField name="educationRequirement" children={() => <JobTextAreaField label="Education" placeholder="e.g. B.Sc/B.Eng in a relevant discipline…" />} />

                  <form.AppField name="experienceRequirement" children={() => <JobTextAreaField label="Experience" placeholder="e.g. 5+ years in a related field…" />} />

                  <form.AppField
                    name="skillsRequirement"
                    children={() => <JobTextAreaField label="Skills" placeholder="e.g. Strong negotiation and technical communication skills…" />}
                  />

                  <form.AppField name="advantageRequirement" children={() => <JobTextAreaField label="Advantage" placeholder="e.g. Existing network within the industry…" />} />

                  <form.AppField
                    name="kpis"
                    children={() => (
                      <JobListField label="Key Performance Indicators" placeholder="e.g. Revenue and profit targets achieved" addLabel="Add KPI" emptyLabel="No KPIs added yet." />
                    )}
                  />
                </div>
              )}
            </div>

            <DialogFooter className="bg-[#f8fafc] border-t border-[#e5e8ec] px-8 py-6 shrink-0">
              <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
                <HistoryIcon size={14} />
                {isEditing ? 'Editing existing opening' : 'Last saved: Not saved yet'}
              </div>

              <div className="flex items-center gap-4">
                <Button type="button" variant="ghost" className="h-auto px-6 py-3 text-[#64748b] hover:text-accent" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>

                <form.Subscribe
                  selector={(state) => state.isSubmitting}
                  children={(isSubmitting) => (
                    <Button type="button" variant="outline" disabled={isSubmitting} className="h-auto px-6 py-3 rounded-lg" onClick={() => saveAs('DRAFT')}>
                      Save as Draft
                    </Button>
                  )}
                />

                <form.Subscribe
                  selector={(state) => state.isSubmitting}
                  children={(isSubmitting) => (
                    <Button
                      type="button"
                      variant="secondary"
                      disabled={isSubmitting}
                      className="h-auto px-8 py-3 rounded-lg shadow-[0px_4px_6px_rgba(0,131,206,0.24)]"
                      onClick={primaryAction}
                    >
                      {isEditing ? 'Save Changes' : 'Publish Career Opening'}
                    </Button>
                  )}
                />
              </div>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateCareerModal;
