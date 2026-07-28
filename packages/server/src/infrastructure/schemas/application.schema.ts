import z from 'zod';

export const APPLICATION_STATUSES = ['NEW', 'REVIEWED', 'SHORTLISTED', 'REJECTED'] as const;

export const createApplicationSchema = z.object({
  careerOpeningId: z.string().optional(),
  jobTitle: z.string().min(1, 'Job title is required'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email(),
  phone: z.string().min(7, 'Enter a valid phone number'),
  experience: z.enum(['5-10', '10+']),
  motivation: z.string().min(1, 'Please provide a motivation'),
});

export const updateApplicationStatusSchema = z.object({
  status: z.enum(APPLICATION_STATUSES),
});

export type ICreateApplication = z.infer<typeof createApplicationSchema>;
export type IUpdateApplicationStatus = z.infer<typeof updateApplicationStatusSchema>;
