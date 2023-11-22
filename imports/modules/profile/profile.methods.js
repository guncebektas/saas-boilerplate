import {ValidatedMethod} from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
import {profileService} from "./profileService.js";

export const profileInsert = new ValidatedMethod({
  name: 'profile.insert',
  validate: new SimpleSchema({
    _id: {type: String},
  }).validator(),
  async run({_id}) {
    return profileService.add(_id);
  }
});
