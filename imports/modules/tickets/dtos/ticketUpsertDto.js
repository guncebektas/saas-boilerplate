import {LongTextField} from "../../shared/uniforms-tailwind/src/index.ts";
import {dto} from "../../shared/helpers/dto.js";

export const ticketUpsertDto= dto(
  {
    message: {
      type: 'string',
      minLength: 10,
      uniforms: {component: LongTextField}
    }
  }, ['message']);
