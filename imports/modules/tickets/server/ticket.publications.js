import { Meteor } from 'meteor/meteor';
import { ticketRepository } from '../ticketRepository.js';
import { TICKET_PUBLICATION } from '../enums/publication.js';

Meteor.publish(TICKET_PUBLICATION.ALL, function () {
  return ticketRepository.find();
});

Meteor.publish(TICKET_PUBLICATION.ONE, function (_id) {
  return ticketRepository.find({ _id });
});

Meteor.publish(TICKET_PUBLICATION.MINE, function () {
  return ticketRepository.find({ userId: this.userId });
});
Meteor.publish(TICKET_PUBLICATION.SEARCH, function (query) {
  console.log('Search query received:', query);
  return ticketRepository.find({
    $or: [
      { message: { $regex: query, $options: 'i' } },
      { title: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } },
      { status: { $regex: query, $options: 'i' } }
    ]
  });
});