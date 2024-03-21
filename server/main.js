import './init.js';
import './modules.js';
import {DummyService} from "../imports/modules/dummy/dummyService";
import {linkRepository} from "../imports/modules/link/linkRepository";
import {linkService} from "../imports/modules/link/linkService";
import {DUMMY_LINKS} from "../imports/modules/dummy/enums/links";

Meteor.startup(async () => {
  const dummyService = new DummyService(linkRepository, linkService, DUMMY_LINKS)
  await dummyService.insert();
});
