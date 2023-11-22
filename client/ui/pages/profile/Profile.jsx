import React from 'react';
import {Button, Label, TextInput} from "flowbite-react";
import {H2} from "../../components/heading/H2.jsx";

export const Profile = () => {
  return (
    <div className="px-4 py-5 sm:p-6">
      <H2 text="Profile"></H2>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <form className="flex max-w-md flex-col gap-4">
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your token"/>
            </div>
            <TextInput id="email" type="text" required/>
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name"/>
            </div>
            <TextInput id="name" type="text" required/>
          </div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="surname" value="Surname"/>
            </div>
            <TextInput id="surname" type="text" required/>
          </div>
          <div>
            <Button type="submit" className="w-full flex justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
