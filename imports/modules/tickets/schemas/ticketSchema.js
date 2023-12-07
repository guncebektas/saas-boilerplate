import {z} from 'zod';
import {ZodBridge} from 'uniforms-bridge-zod';

export const ticketSchema = z.object({
  message: z.string(),
});

export const ticketBridge = new ZodBridge({schema: ticketSchema});
