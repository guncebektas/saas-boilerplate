import {BaseRepository} from "../shared/repository/baseRepository.js";
import {Notifications} from "./database/notifications";

class LinkRepository extends BaseRepository {
  constructor() {
    super(Notifications);
  }
}

export const linkRepository = new LinkRepository();
