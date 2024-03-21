import './init.js';
import './modules.js';
import {dummyService} from "../imports/modules/dummy/dummyService";

Meteor.startup(async () => {
  await dummyService.insertLinks();
});
