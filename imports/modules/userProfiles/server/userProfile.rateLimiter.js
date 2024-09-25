import {RATE_LIMITER} from '../enums/rateLimitter.js';
import {profileSaveOtp, profileUpdate} from "../userProfile.methods.js";

const LISTS_METHODS = [
  profileUpdate,
  profileSaveOtp
].map(method => method.name);

DDPRateLimiter.addRule({
  name(name) {
    return LISTS_METHODS.includes(name);
  },
  connectionId() {
    return true;
  }
}, RATE_LIMITER.REQUEST_COUNT, RATE_LIMITER.TIME_INTERVAL);