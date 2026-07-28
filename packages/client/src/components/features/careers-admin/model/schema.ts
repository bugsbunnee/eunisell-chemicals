import { z } from 'zod';

export const careerOpeningSchema = z.object({
  title: z.string().min(2, 'Job title is required'),
  slug: z
    .string()
    .min(2, 'Job slug is required')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase letters, numbers and hyphens only'),
  department: z.string().min(1, 'Please select a department'),
  category: z.string().min(1, 'Please select a job category'),
  location: z.string().min(2, 'Location is required'),
  workLocationDetails: z.string(),
  jobType: z.string().min(1, 'Please select an employment type'),
  workMode: z.string().min(1, 'Please select a work mode'),
  level: z.string().min(1, 'Please select an experience level'),
  experienceRange: z.string().min(1, 'Experience range is required'),
  reportingLine: z.string(),
  travelRequirement: z.string(),
  postedDate: z.string().min(1, 'Posted date is required'),
  closingDate: z.string().min(1, 'Closing date is required'),
  status: z.enum(['OPEN', 'DRAFT', 'CLOSED']),
  featured: z.boolean(),
});

export type CareerOpeningInput = z.infer<typeof careerOpeningSchema>;

export const careerOpeningDefaultValues: CareerOpeningInput = {
  title: '',
  slug: '',
  department: '',
  category: '',
  location: '',
  workLocationDetails: '',
  jobType: '',
  workMode: '',
  level: '',
  experienceRange: '',
  reportingLine: '',
  travelRequirement: '',
  postedDate: '',
  closingDate: '',
  status: 'DRAFT',
  featured: false,
};
