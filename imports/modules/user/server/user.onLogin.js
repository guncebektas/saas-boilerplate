import {Accounts} from 'meteor/accounts-base';

Accounts.onLogin(async function (payload) {
  const {user} = payload;

  return user;
});
