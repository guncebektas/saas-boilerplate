import React from 'react';
import {H2} from "../../components/heading/Headings";
import {AutoForm} from "../../../../imports/modules/shared/uniforms-tailwind/src";
import {contactBridge} from "../../../../imports/modules/contact/schemas/contactSchema";
import {contactUpsert} from "../../../../imports/modules/contact/contact.methods";

export const ContactForm = () => {
  const handleSubmit = async function (formData) {
    contactUpsert(formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 py-5 sm:p-6">
      <H2 text="Contact us"></H2>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <AutoForm schema={contactBridge} onSubmit={handleSubmit}/>
      </div>
    </div>
  );
};
