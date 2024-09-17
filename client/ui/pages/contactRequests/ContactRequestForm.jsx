import React from 'react';
import {H2} from "../../components/heading/Headings";
import {AutoForm} from "../../../../imports/modules/shared/uniforms-tailwind/src";
import {contactBridge} from "../../../../imports/modules/contactRequests/schemas/contactSchema";
import {contactRequestUpsert} from "../../../../imports/modules/contactRequests/contact.methods";
import Map from "../../components/map/Map";
import {ToastSuccess} from "../../components/alert/Toast";

export const ContactRequestForm = () => {
  const {name} = Meteor.settings.public.app;

  const handleSubmit = async function (formData) {
    contactRequestUpsert(formData)
      .then(response => {
        console.log(response);
        ToastSuccess()
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 py-5 sm:p-6">
      <H2 text="Contact us" />
      <div className="grid grid-cols-2 gap-4"> {/* Two-column layout */}
        <div className="flex flex-col">
          <AutoForm schema={contactBridge} onSubmit={handleSubmit} />
        </div>

        <Map title={name} latitude={41.0434} longitude={29.0091} zoom={14} />
      </div>
    </div>
  );
};
