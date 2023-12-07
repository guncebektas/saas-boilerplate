import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavItem} from "./NavItem.jsx";
import {NavItemDeep} from "./NavItemDeep.jsx";
import {ROUTE} from "../../../routes/enums/route.js";

export const Nav = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
           aria-label="Sidenav"
           id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 pt-14 sm:pt-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <ul className="space-y-2">
          <li>
            <NavItem link={ROUTE.HOME} icon="dashboard" text="Dashboard"/>
          </li>
          <li>
            <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
              <FontAwesomeIcon
                icon="file"
                className="w-6 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            <ul id="dropdown-pages" className="hidden py-2 space-y-2">
              <li>
                <NavItemDeep link={ROUTE.PROFILE} text="Profile"/>
              </li>
              <li>
                <NavItemDeep link={ROUTE.PRICE} text="Price"/>
              </li>
              <li>
                <NavItemDeep link={ROUTE.DOCS} text="Docs"/>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <NavItem link={ROUTE.TICKETS} icon="clipboard-list" text="Ticket"/>
          </li>
        </ul>
        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <NavItem link={ROUTE.DOCS} icon="clipboard" text="Docs"/>
          </li>
        </ul>
      </div>
      <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
        <Link to={ROUTE.ADMIN} data-tooltip-target="tooltip-admin" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
          <FontAwesomeIcon icon="user-tie"/>
        </Link>
        <div id="tooltip-admin" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
          Admin
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <Link to={ROUTE.SETTINGS} data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
          <FontAwesomeIcon icon="cog"/>
        </Link>
        <div id="tooltip-settings" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
          Settings
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </aside>
  );
};
