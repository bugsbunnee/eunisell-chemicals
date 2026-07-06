import z from 'zod';

export const createSubscriptionSchema = z.object({
  email: z.email(),
  industry: z.string().min(1, 'Industry is required'),
  interest: z.string().optional(),
});

export type ICreateSubscription = z.infer<typeof createSubscriptionSchema>;
