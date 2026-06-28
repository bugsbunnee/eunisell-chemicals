import z from 'zod';

export const createEnquirySchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  company: z.string().min(1, 'Company is required'),
  jobTitle: z.string().optional(),
  email: z.email(),
  phone: z.string().min(1, 'Phone number is required'),
  country: z.string().min(1, 'Country is required'),
  industry: z.string().min(1, 'Industry is required'),
  enquiryType: z.string().min(1, 'Enquiry type is required'),
  solutionArea: z.string().min(1, 'Solution area is required'),
  message: z.string().min(10, 'Please provide at least 10 characters'),
});

export const updateEnquirySchema = z.object({
  status: z.enum(['NEW', 'IN_PROGRESS', 'CLOSED', 'PENDING']).optional(),
  priority: z.enum(['NORMAL', 'URGENT']).optional(),
});

export const enquiryQuerySchema = z.object({
  search: z.string().min(3, 'Search must be at least 3 characters').optional(),
  status: z.enum(['NEW', 'IN_PROGRESS', 'CLOSED', 'PENDING']).optional(),
  priority: z.enum(['NORMAL', 'URGENT']).optional(),
  enquiryType: z.string().optional(),
});

export type ICreateEnquiry = z.infer<typeof createEnquirySchema>;
export type IUpdateEnquiry = z.infer<typeof updateEnquirySchema>;
export type IEnquiryQuery = z.infer<typeof enquiryQuerySchema>;
