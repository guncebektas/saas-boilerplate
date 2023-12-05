import {Roles} from 'meteor/alanning:roles';
import {ROLE} from "../../shared/enums/role.js";

const roles = Object.values(ROLE);
roles.forEach(role => {
  Roles.createRole(role, {unlessExists: true});
});
