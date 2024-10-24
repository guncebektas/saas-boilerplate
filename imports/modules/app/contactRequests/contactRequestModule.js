import {CONTACT_REQUESTS_PUBLICATION} from "./enums/publication";
import {ROUTE} from "../../../../client/routes/enums/route";
import {contactRequestRepository} from "./contactRequestRepository";
import {contactRequestMethods} from "./contact.methods";

export const contactRequestModule = {
  publisher: CONTACT_REQUESTS_PUBLICATION,
  repository: contactRequestRepository,
  methods: contactRequestMethods,
  list: {
    title: 'Contact requests',
    route: ROUTE.SETTINGS_CONTACT_REQUESTS_LIST,
  },
  form: {
    title: 'Contact request',
    route: ROUTE.CONTACT_FORM,
  }
}
