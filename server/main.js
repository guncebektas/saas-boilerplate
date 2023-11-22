import './init.js';
import './modules.js';

// TODO: remove
import {Meteor} from 'meteor/meteor';
import {Links} from '/imports/modules/links/database/links';
async function insertLink({title, url}) {
  await Links.insertAsync({title, url, createdAt: new Date()});
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await Links.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com',
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return Links.find();
  });
});
