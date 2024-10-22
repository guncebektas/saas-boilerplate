import {RATE_LIMITER} from '../enums/rateLimitter.js';
import {ticketsMethods} from "../ticket.methods.js";

const LISTS_METHODS = [
  Object.keys(ticketsMethods)
].map(method => method.name);

DDPRateLimiter.addRule({
  name(name) {
    return LISTS_METHODS.includes(name);
  },
  connectionId() {
    return true;
  }
}, RATE_LIMITER.REQUEST_COUNT, RATE_LIMITER.TIME_INTERVAL);
