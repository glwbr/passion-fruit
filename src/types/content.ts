// NOTE: maybe split these or normalize the cards
import { z } from 'zod';

export const ZEventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  date: z.iso.datetime(),
  time: z.string().optional(),
  endDate: z.iso.datetime().optional(),
  location: z.string().optional(),
  category: z.string().optional(), // TODO: move these into strict enum types
  image: z.string().optional(),
  featured: z.boolean().optional(),
});

export type TEvent = z.infer<typeof ZEventSchema>;

export const ZSermonSchema = z.object({
  slug: z.string(),
  title: z.string(),
  speaker: z.string(),
  date: z.iso.datetime(),
  duration: z.number().optional(), // in minutes
  videoURL: z.url().optional(),
  series: z.string().optional(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
  content: z.string().optional(),
});

export type TSermon = z.infer<typeof ZSermonSchema>;

export const ZMinistrySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  leader: z.string().optional(),
  schedule: z.string().optional(),
  image: z.string().optional(),
});

export type TMinistry = z.infer<typeof ZMinistrySchema>;

export const ZContactFormDataSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type TContactFormData = z.infer<typeof ZContactFormDataSchema>;