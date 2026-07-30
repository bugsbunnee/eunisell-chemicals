import z from 'zod';

export const CAREER_STATUSES = ['OPEN', 'DRAFT', 'CLOSED'] as const;
export const CAREER_DEPARTMENTS = [
  'Technical Services',
  'Laboratory Services',
  'QHSE',
  'Graduate Trainee',
  'Supply Chain & Logistics',
  'Commercial',
  'Business Development',
] as const;
export const CAREER_CATEGORIES = ['Technical', 'Commercial', 'Operations', 'Corporate', 'Field Services'] as const;
export const CAREER_EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Contract', 'Trainee', 'Internship'] as const;
export const CAREER_WORK_MODES = ['Onsite', 'Hybrid', 'Remote'] as const;
export const CAREER_EXPERIENCE_LEVELS = ['Entry Level', 'Mid Level', 'Senior Level'] as const;

const careerResponsibilityGroupSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

const careerOpeningShape = z.object({
  title: z.string().min(2),
  slug: z
    .string()
    .min(2)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase letters, numbers and hyphens only'),
  department: z.enum(CAREER_DEPARTMENTS),
  category: z.enum(CAREER_CATEGORIES),
  location: z.string().min(2),
  locationDetails: z.string(),
  jobType: z.enum(CAREER_EMPLOYMENT_TYPES),
  workMode: z.enum(CAREER_WORK_MODES),
  level: z.enum(CAREER_EXPERIENCE_LEVELS),
  experienceRange: z.string().min(1),
  reportingLine: z.string(),
  travelRequirement: z.string(),
  postedDate: z.coerce.date(),
  deadline: z.coerce.date(),
  status: z.enum(CAREER_STATUSES).optional(),
  featured: z.boolean().optional(),
  aboutText: z.array(z.string()).default([]),
  responsibilities: z.array(careerResponsibilityGroupSchema).default([]),
  highlights: z.array(z.string()).default([]),
  kpis: z.array(z.string()).default([]),
  educationRequirement: z.string().default(''),
  experienceRequirement: z.string().default(''),
  skillsRequirement: z.string().default(''),
  advantageRequirement: z.string().default(''),
});

export const createCareerOpeningSchema = careerOpeningShape.refine((data) => data.deadline > data.postedDate, {
  message: 'Deadline must be after the posted date',
  path: ['deadline'],
});

export const updateCareerOpeningSchema = careerOpeningShape.partial();

export const careerQuerySchema = z.object({
  search: z.string().optional(),
  dept: z.string().optional(),
  jobType: z.string().optional(),
  level: z.string().optional(),
  status: z.enum(CAREER_STATUSES).optional(),
  featured: z.enum(['yes', 'no']).optional(),
});

export type ICreateCareerOpening = z.infer<typeof createCareerOpeningSchema>;
export type IUpdateCareerOpening = z.infer<typeof updateCareerOpeningSchema>;
export type ICareerQuery = z.infer<typeof careerQuerySchema>;
