import {createMethod} from 'meteor/jam:method';
import {z} from 'zod';
import {ticketService} from "./ticketService.js";

export const ticketUpsert = createMethod({
  name: 'todos.create',
  schema: z.object({
    _id: z.string().optional(),
    message: z.string()
  }),
  async run({_id, message}) {
    return ticketService.upsert({_id, message});
  }
});
