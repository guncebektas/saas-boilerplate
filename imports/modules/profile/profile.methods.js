import {profileService} from "./profileService.js";
import {ValidatedMethod} from "meteor/mdg:validated-method";
import {schema} from "../shared/schema.js";

export const profileInsert = new ValidatedMethod({
  name: 'profile.insert',
  validate: null,
  async run({_id}) {
    return profileService.add(_id);
  }
});

export const profileUpdate = new ValidatedMethod({
  name: 'profile.update',
  validate: schema.compile({
    type: 'object',
    properties: {
      firstname: { type: 'string' },
      lastname: { type: 'string' },
    },
    required: ['firstname', 'lastname'],
    additionalProperties: false,
  }),
  async run({firstname, lastname}) {
    return profileService.edit(this.userId, firstname, lastname);
  }
});
