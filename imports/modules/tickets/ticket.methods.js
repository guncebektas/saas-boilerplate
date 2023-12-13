import {createMethod} from 'meteor/jam:method';
import {z} from 'zod';
import {ticketService} from "./ticketService.js";
import {ticketFormSchema} from "./schemas/ticketSchema.js";

export const ticketUpsert = createMethod({
  name: 'todos.create',
  schema: z.object({
    ...{_id: z.string().optional()},
    ...ticketFormSchema
  }),
  async run(object) {
    return ticketService.upsert(object);
  }
});
