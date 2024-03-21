import {Meteor} from "meteor/meteor";
import {Links} from "../database/links";
import {PUBLISH} from "../enums/publish";

Meteor.publish(PUBLISH.LINKS, function () {
  return Links.find();
});
