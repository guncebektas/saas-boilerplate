import {BaseService} from "../shared/service/baseService.js";
import {DUMMY_LINKS} from "./enums/links";
import {linkInsert} from "../link/link.methods";
import {linkRepository} from "../link/linkRepository";
import {linkService} from "../link/linkService";

class DummyService extends BaseService {
  constructor() {
    super();
  }

  async insertLinks() {
    if (await linkRepository.find().countAsync() === 0) {
      for (const link of DUMMY_LINKS) {
        await linkService.add(link.title, link.url);
      }
    }
  }
}

export const dummyService = new DummyService();
