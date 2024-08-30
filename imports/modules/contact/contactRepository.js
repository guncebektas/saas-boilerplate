import {BaseRepository} from "../shared/repository/baseRepository.js";
import {Contacts} from "./database/contacts";

class ContactRepository extends BaseRepository {
  constructor(collection) {
    super(collection);
  }
}

export const contactRepository = new ContactRepository(Contacts);
