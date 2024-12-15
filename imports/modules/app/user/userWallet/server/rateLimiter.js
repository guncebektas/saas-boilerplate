import {RATE_LIMITER} from '../enums/rateLimitter.js';
import {userWalletMethod} from "../userWalletMethod";

const LISTS_METHODS = [
  Object.keys(userWalletMethod)
].map(method => method.name);

DDPRateLimiter.addRule({
  name(name) {
    return LISTS_METHODS.includes(name);
  },
  connectionId() {
    return true;
  }
}, RATE_LIMITER.REQUEST_COUNT, RATE_LIMITER.TIME_INTERVAL);
