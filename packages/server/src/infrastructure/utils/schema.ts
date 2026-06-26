import z, { email } from 'zod';

export const authSchema = z.object({
  email: z.email(),
  password: z.string().min(1, 'Password is required'),
});

export type IAuth = z.infer<typeof authSchema>;
