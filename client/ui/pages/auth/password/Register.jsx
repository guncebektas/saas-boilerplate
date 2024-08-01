import React, {useRef} from 'react';
import {Button, Label, TextInput} from 'flowbite-react';
import {STATE_AUTH_PASSWORD_FORM} from "./enums/state.js";
import {Accounts} from "meteor/accounts-base";
import {profileInsert} from "../../../../../imports/modules/profile/profile.methods.js";

export const Register = ({onStateChange}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleState = () => {
    onStateChange(STATE_AUTH_PASSWORD_FORM.LOGIN);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    Accounts.createUserAsync({
      email: formData.email,
      password: formData.password
    }, async (error, response) => {
      if (error) {
        console.log(error);
        return;
      }

      await profileInsert({_id: response.id})
        .then(response => {
          window.location.reload();
        })
    });
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Register</h2>

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
              <Button type="submit" className="w-full flex justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</Button>
            </div>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <button className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handleState}>Login here</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
