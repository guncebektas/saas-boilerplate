import React, {useRef} from 'react';
import {Button, Label, TextInput} from 'flowbite-react';
import {profileInsert} from "../../../../../imports/modules/profile/profile.methods.js";
import {STATE_AUTH_PASSWORD_FORM} from "./enums/state.js";
import {Accounts} from "meteor/accounts-base";

export const Login = ({onStateChange}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleState = (state) => {
    onStateChange(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    Meteor.loginWithPassword(formData.email, formData.password, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log(response);
      location.reload();
    });
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Login</h2>

      <div className="bg-white dark:bg-gray-900 py-8 px-4 mt-8 shadow sm:rounded-lg sm:px-10">
        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email Address"/>
              </div>
              <TextInput id="email" type="email" ref={emailRef} required/>
            </div>
            <div className="mb-2">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password"/>
              </div>
              <TextInput id="password" type="password" ref={passwordRef} required/>
            </div>
            <div>
              <Button type="submit" className="w-full flex justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</Button>
            </div>
          </form>
          <div className="mt-3 flex">
            <div className="justify-start">
              <Button className="text-blue" onClick={() => handleState(STATE_AUTH_PASSWORD_FORM.FORGOTTEN_PASSWORD)}>Forgotten password?</Button>
            </div>
            <div className="justify-end">
              <Button className="text-blue" onClick={() => handleState(STATE_AUTH_PASSWORD_FORM.REGISTER)}>Register</Button>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
