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

export const profileUpdate = new ValidatedMethod({
  name: 'profile.update',
  validate: new SimpleSchema({
    name: {type: String},
    surname: {type: String},
  }).validator(),
  async run({name, surname}) {
    return profileService.edit(this.userId, name, surname);
  }
});
