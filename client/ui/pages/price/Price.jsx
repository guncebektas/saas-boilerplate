import React from 'react';
import {Button} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Price = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">We focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$29</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Team size: <span className="font-semibold">1 developer</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Premium support: <span className="font-semibold">6 months</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Free updates: <span className="font-semibold">6 months</span></span>
            </li>
          </ul>
          <Button color="blue">Get started</Button>
        </div>

        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Company</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$99</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Team size: <span className="font-semibold">10 developers</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Premium support: <span className="font-semibold">24 months</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Free updates: <span className="font-semibold">24 months</span></span>
            </li>
          </ul>
          <Button color="blue">Get started</Button>
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$499</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Team size: <span className="font-semibold">100+ developers</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Premium support: <span className="font-semibold">36 months</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon="check" className="text-green-500 dark:text-green-400"/>
              <span>Free updates: <span className="font-semibold">36 months</span></span>
            </li>
          </ul>
          <Button color="blue">Get started</Button>
        </div>
      </div>
    </div>
  );
};
