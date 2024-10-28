import {RATE_LIMITER} from '../enums/rateLimitter.js';
import {userSetPassword, userSendResetPasswordEmail} from "../user.methods";
import {userResetPasswordSchema} from "../schemas/userResetPasswordSchema";

const LISTS_METHODS = [
  userSendResetPasswordEmail,
  userResetPasswordSchema,
  userSetPassword
].map(method => method.name);

DDPRateLimiter.addRule({
  name(name) {
    return LISTS_METHODS.includes(name);
  },
  connectionId() {
    return true;
  }
}, RATE_LIMITER.REQUEST_COUNT, RATE_LIMITER.TIME_INTERVAL);
