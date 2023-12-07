import React from 'react';
import {H2} from "../../components/heading/H2.jsx";
import {useTracker} from "meteor/react-meteor-data";
import {ticketRepository} from "../../../../imports/modules/tickets/ticketRepository.js";
import {TICKET_PUBLICATION} from "../../../../imports/modules/tickets/enums/publication.js";
import {Link} from "react-router-dom";
import {ROUTE} from "../../../routes/enums/route.js";
import {Button} from "flowbite-react";

export const Tickets = () => {
  const tickets = useTracker(() => {
    const handle = Meteor.subscribe(TICKET_PUBLICATION.ALL); // TODO: limit this
    return handle.ready() ? ticketRepository.find().fetch() : [];
  });

  return (
    <>
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center">
              <H2 text="Ticket"></H2>
            </div>
            <div className="mt-2 max-w-xl text-gray-500 text-lg">
              <ul>
                {tickets.map((item) => (
                  <li key={item._id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <Link to={ROUTE.TICKET}>
              <Button
                color="blue"
              >
                New
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
