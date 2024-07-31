import React, {useRef} from 'react';
import {Button, Label, TextInput} from 'flowbite-react';
import {profileInsert} from "../../../../../imports/modules/profile/profile.methods.js";
import {STATE_AUTH_PASSWORD_FORM} from "./enums/state.js";
import {Accounts} from "meteor/accounts-base";
import {useTranslator} from "../../../providers/i18n";

export const Login = ({onStateChange}) => {
  const t = useTranslator();
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
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">{t('Login')}</h2>

      <div className="bg-white dark:bg-gray-900 py-8 px-4 mt-8 shadow sm:rounded-lg sm:px-10">
        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-1">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email Address"/>
              </div>
              <TextInput id="email" type="email" ref={emailRef} required/>
            </div>
            <div className="mb-1">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password"/>
              </div>
              <TextInput id="password" type="password" ref={passwordRef} required/>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <button type="button" className="font-medium text-gray-500 dark:text-gray-400 hover:underline" onClick={() => handleState(STATE_AUTH_PASSWORD_FORM.FORGOTTEN_PASSWORD)}>Forgotten password?</button>
            </div>
            <div>
              <Button type="submit" className="w-full flex justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</Button>
            </div>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <button className="font-medium hover:underline mx-1" onClick={() => handleState(STATE_AUTH_PASSWORD_FORM.REGISTER)}>Register</button>
            </p>
          </form>
        </div>
      </div>
    </div>
);
};
