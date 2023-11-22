import {Meteor} from 'meteor/meteor';
import {Log} from 'meteor/logging';

/**
 * Initialize server at startup
 * @locus server
 */
class ServerInit {
  /**
   * @constructor
   */
  constructor() {
    this._setMailURL();

    Log.warn({message: '################################', app: 'INIT'})
    Log.warn({message: 'Meteor SaaS Boilerplate started!', app: 'INIT'});
    Log.warn({message: '################################', app: 'INIT'})
  }

  /**
   *
   * @private
   */
  _setMailURL() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    process.env.MAIL_URL = Meteor.settings.private["mailUrl"];
  }
}

/**
 * No need to export.
 * It will only run once on server initialize
 */
new ServerInit();
