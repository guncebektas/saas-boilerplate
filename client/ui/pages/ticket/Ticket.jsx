import React from 'react';
import {H2} from "../../components/heading/H2.jsx";
import { AutoForm } from '../../../../imports/modules/shared/uniforms-tailwind/src';

import {ticketBridge} from "../../../../imports/modules/tickets/ticketSchema.js";

export const Ticket = () => {
  return (
    <div className="px-4 py-5 sm:p-6">
      <H2 text="Ticket"></H2>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <AutoForm schema={ticketBridge} onSubmit={console.log}/>
      </div>
    </div>
  );
};
