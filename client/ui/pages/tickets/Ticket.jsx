import React from 'react';
import {H2} from "../../components/heading/H2.jsx";
import {AutoForm} from '../../../../imports/modules/shared/uniforms-tailwind/src';
import {ticketUpsert} from "../../../../imports/modules/tickets/ticket.methods.js";
import {ticketBridge} from "../../../../imports/modules/tickets/schemas/ticketSchema.js";

const handleSubmit = async () => {
  console.log('mesaj 1 mesaj 1 mesaj 1');

  ticketUpsert({
    message: "message"
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
};

export const Ticket = () => {
  return (
    <div className="px-4 py-5 sm:p-6">
      <H2 text="Ticket"></H2>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <AutoForm schema={ticketBridge} onSubmit={handleSubmit}/>
      </div>
    </div>
  );
};
