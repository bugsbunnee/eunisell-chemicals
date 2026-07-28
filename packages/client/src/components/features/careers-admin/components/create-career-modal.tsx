import React, { useCallback } from 'react';
import http from '../../../../services/http';

import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { MapPinIcon, CalendarIcon, HistoryIcon } from 'lucide-react';

import { useAppForm } from '../../../forms/app-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../../../ui/dialog';
import { Button } from '../../../ui/button';
import { cn, getErrorMessage, slugify } from '../../../../lib/utils';
import { DEPARTMENTS, CATEGORIES, EMPLOYMENT_TYPES, WORK_MODES, EXPERIENCE_LEVELS, STATUS_OPTIONS, CREATE_CAREER_TABS } from '../model/constants';
import { careerOpeningSchema, careerOpeningDefaultValues, type CareerOpeningInput } from '../model/schema';

import JobTextField from './job-text-field';
import JobSelectField from './job-select-field';
import JobDateField from './job-date-field';
import JobToggleField from './job-toggle-field';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateCareerModal: React.FC<Props> = ({ open, onOpenChange }) => {
  const queryClient = useQueryClient();

  const form = useAppForm({
    defaultValues: careerOpeningDefaultValues,
    onSubmit: async ({ value }) => {
      try {
        await http.post('/api/v1/careers', value);

        await queryClient.invalidateQueries({ queryKey: ['career-openings'] });
        await queryClient.invalidateQueries({ queryKey: ['career-stats'] });

        toast.success(value.status === 'DRAFT' ? 'Career opening saved as draft' : 'Career opening published successfully');

        form.reset();
        onOpenChange(false);
      } catch (error) {
        toast.error('Failed to save the career opening', { description: getErrorMessage(error) });
      }
    },
  });

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

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) form.reset();
        onOpenChange(next);
      }}
    >
      <DialogContent className="w-[calc(100%-2rem)] max-w-236 max-h-[85vh] p-0 flex flex-col gap-0">
        <DialogHeader className="p-8 pb-6 shrink-0">
          <DialogTitle>Create New Career Opening</DialogTitle>
          <DialogDescription>Add a new job opportunity and configure the content displayed on the public career detail page.</DialogDescription>
        </DialogHeader>

        <div className="flex gap-8 px-8 border-b border-[#e5e8ec] bg-[#fbfbfc] shrink-0">
          {CREATE_CAREER_TABS.map((tab, i) => (
            <span
              key={tab}
              title={i === 0 ? undefined : 'Coming soon'}
              className={cn(
                'py-4 text-sm border-b-2 -mb-px whitespace-nowrap',
                i === 0 ? 'border-secondary text-secondary' : 'border-transparent text-[#64748b] cursor-not-allowed'
              )}
            >
              {tab}
            </span>
          ))}
        </div>

        <form onSubmit={onSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 min-h-0 overflow-y-auto p-8 grid grid-cols-2 gap-x-8 gap-y-6 items-start">
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

          <DialogFooter className="bg-[#f8fafc] border-t border-[#e5e8ec] px-8 py-6 shrink-0">
            <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <HistoryIcon size={14} />
              Last saved: Not saved yet
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
                    onClick={() => saveAs('OPEN')}
                  >
                    Publish Career Opening
                  </Button>
                )}
              />
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCareerModal;
