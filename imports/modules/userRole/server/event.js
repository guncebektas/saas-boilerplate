import {event} from "../../shared/event/server/init.js";
import {EVENT} from "../../shared/enums/event.js";
import {ROLE} from "../../shared/enums/role.js";

event.on(EVENT.SET_ADMIN_ROLE, function ({userId}) {
  Roles.addUsersToRoles(userId, Object.values(ROLE));
});
