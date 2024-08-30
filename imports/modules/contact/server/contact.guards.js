import {Contacts} from "../database/contacts";

Contacts.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});
