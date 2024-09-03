import React, { useState, useEffect, useCallback } from 'react';
import { H2 } from "../../components/heading/Headings.jsx";
import { useTracker } from "meteor/react-meteor-data";
import { ticketRepository } from "../../../../imports/modules/tickets/ticketRepository.js";
import { TICKET_PUBLICATION } from "../../../../imports/modules/tickets/enums/publication.js";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../routes/enums/route.js";
import { Button, Table } from "flowbite-react";
import { setParam } from "../../../shared/helpers/setParam.js";
import { ticketRemove } from "../../../../imports/modules/tickets/ticket.methods.js";
import SearchBar from '../../components/searchBar/SearchBar';

export const Tickets = () => {
  const [query, setQuery] = useState('');
  const [filteredTickets, setFilteredTickets] = useState([]);

  const tickets = useTracker(() => {
    const handle = Meteor.subscribe(TICKET_PUBLICATION.ALL);

    if (!handle.ready()) {
      return [];
    }

    return ticketRepository.find().fetch();
  });

  const handleSearch = useCallback(() => {
    console.log('Search query:', query);
    if (query) {
      const handle = Meteor.subscribe(TICKET_PUBLICATION.SEARCH, query);

      if (handle.ready()) {
        const results = ticketRepository.find({
          $or: [
            { message: { $regex: query, $options: 'i' } },
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { status: { $regex: query, $options: 'i' } }
          ]
        }).fetch();
        console.log('Search results:', results);
        setFilteredTickets(results);
      }
    } else {
      setFilteredTickets(tickets);
    }
  }, [query, tickets]);

  useEffect(() => {
    setFilteredTickets(tickets);
  }, [tickets]);

  const handleRemove = async (_id) => {
    await ticketRemove({ _id });
  };

  return (
    <>
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center">
              <H2 text="Ticket"></H2>

              <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                <Link to={setParam(ROUTE.TICKET, { key: '_id', value: 'new' })}>
                  <Button gradientMonochrome="purple">New</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <div className="mt-2 w-full text-gray-500 text-lg">
          <Table striped hoverable className="w-full">
            <Table.Body>
              {filteredTickets.map((item) => (
                <Table.Row key={item._id}>
                  <Table.Cell>{item.message}</Table.Cell>
                  <Table.Cell>{item.title}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell>{item.status}</Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-wrap gap-2">
                      <Link to={setParam(ROUTE.TICKET, { key: '_id', value: item._id })}>
                        <Button color="blue">Edit</Button>
                      </Link>
                      <Button color="failure" onClick={() => handleRemove(item._id)}>Delete</Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};