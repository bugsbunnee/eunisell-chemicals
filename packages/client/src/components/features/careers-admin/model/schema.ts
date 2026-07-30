import { z } from 'zod';
import type { Job } from '../../../../lib/entities';

export type CareerOpeningInput = Omit<Job, 'id'>;

const responsibilityGroupShape = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

export const careerOpeningShape = {
  title: z.string().min(2, 'Job title is required'),
  slug: z
    .string()
    .min(2, 'Job slug is required')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase letters, numbers and hyphens only'),
  department: z.string().min(1, 'Please select a department'),
  category: z.string().min(1, 'Please select a job category'),
  location: z.string().min(2, 'Location is required'),
  locationDetails: z.string(),
  jobType: z.string().min(1, 'Please select an employment type'),
  workMode: z.string().min(1, 'Please select a work mode'),
  level: z.string().min(1, 'Please select an experience level'),
  experienceRange: z.string().min(1, 'Experience range is required'),
  reportingLine: z.string(),
  travelRequirement: z.string(),
  postedDate: z.string().min(1, 'Posted date is required'),
  deadline: z.string().min(1, 'Closing date is required'),
  status: z.enum(['OPEN', 'DRAFT', 'CLOSED']),
  featured: z.boolean(),
  aboutText: z.array(z.string()),
  responsibilities: z.array(responsibilityGroupShape),
  highlights: z.array(z.string()),
  kpis: z.array(z.string()),
  educationRequirement: z.string(),
  experienceRequirement: z.string(),
  skillsRequirement: z.string(),
  advantageRequirement: z.string(),
} satisfies { [K in keyof CareerOpeningInput]: z.ZodType<CareerOpeningInput[K]> };

export const careerOpeningSchema = z.object(careerOpeningShape);

export const careerOpeningDefaultValues: CareerOpeningInput = {
  title: '',
  slug: '',
  department: '',
  category: '',
  location: '',
  locationDetails: '',
  jobType: '',
  workMode: '',
  level: '',
  experienceRange: '',
  reportingLine: '',
  travelRequirement: '',
  postedDate: '',
  deadline: '',
  status: 'DRAFT',
  featured: false,
  aboutText: [],
  responsibilities: [],
  highlights: [],
  kpis: [],
  educationRequirement: '',
  experienceRequirement: '',
  skillsRequirement: '',
  advantageRequirement: '',
};
