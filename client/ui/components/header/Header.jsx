import React from "react";
import {DarkThemeToggle} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Header = () => {

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <a href="/" className="flex items-center justify-between mr-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 400 400">
                <g fill="#DE4F4F">
                  <path
                    d="M286.575 306.886L44.755 49.922l256.962 241.82c4.312 4.056 4.518 10.837.46 15.146-4.053 4.31-10.832 4.518-15.144.46-.15-.14-.318-.31-.458-.462M251.032 325.01L68.692 127.528 266.177 309.87c4.35 4.013 4.618 10.794.604 15.144-4.018 4.35-10.794 4.617-15.146.604-.2-.19-.413-.406-.602-.607M214.083 325.542L92.907 194.272 224.18 315.446c2.898 2.676 3.077 7.197.402 10.098-2.677 2.896-7.195 3.082-10.097.402-.136-.125-.277-.272-.402-.405M315.612 234.685L189.102 98.078 325.71 224.585c2.896 2.684 3.067 7.203.387 10.1-2.682 2.895-7.2 3.066-10.098.387-.13-.123-.268-.258-.388-.387M304.697 272.93L121.567 74.655l198.274 183.13c4.35 4.017 4.62 10.796.605 15.144-4.017 4.352-10.797 4.617-15.146.604-.205-.19-.418-.404-.603-.605M176.31 314.783l-57.647-62.695 62.692 57.65c1.453 1.334 1.547 3.596.215 5.045-1.338 1.453-3.598 1.55-5.05.215-.072-.07-.144-.143-.21-.215M311.093 189.297l-57.65-62.694 62.696 57.646c1.45 1.335 1.546 3.597.21 5.048-1.335 1.45-3.595 1.547-5.05.21-.07-.065-.143-.143-.207-.21"></path>
                </g>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SaaS Boilerplate</span>
          </a>
          <form action="#" method="GET" className="hidden md:block md:pl-2">
            <label htmlFor="topbar-search" className="sr-only">Search</label>
            <div className="relative md:w-64 md:w-96">
              <div
                className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center lg:order-2">
          <button
            type="button"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Toggle search</span>
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clipRule="evenodd" fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </button>

          <DarkThemeToggle/>

          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>

            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
              ></path>
            </svg>
          </button>

          <div
            className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
            id="notification-dropdown"
          >
            <div
              className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300"
            >
              Notifications
            </div>
            <div>
              <a
                href="#"
                className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green avatar"
                  />
                  <div
                    className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                      ></path>
                      <path
                        d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="pl-3 w-full">
                  <div
                    className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                  >
                    New message from
                    <span className="font-semibold text-gray-900 dark:text-white"
                    >Bonnie Green</span
                    >: "Hey, what's up? All set for the presentation?"
                  </div>
                  <div
                    className="text-xs font-medium text-primary-600 dark:text-primary-500"
                  >
                    a few moments ago
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />
                  <div
                    className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="pl-3 w-full">
                  <div
                    className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white"
                    >Jese leos</span
                    >
                    and
                    <span className="font-medium text-gray-900 dark:text-white"
                    >5 others</span
                    >
                    started following you.
                  </div>
                  <div
                    className="text-xs font-medium text-primary-600 dark:text-primary-500"
                  >
                    10 minutes ago
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="Joseph McFall avatar"
                  />
                  <div
                    className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="pl-3 w-full">
                  <div
                    className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white"
                    >Joseph Mcfall</span
                    >
                    and
                    <span className="font-medium text-gray-900 dark:text-white"
                    >141 others</span
                    >
                    love your story. See it and view more stories.
                  </div>
                  <div
                    className="text-xs font-medium text-primary-600 dark:text-primary-500"
                  >
                    44 minutes ago
                  </div>
                </div>
              </a>
            </div>
            <a
              href="#"
              className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
            >
              <div className="inline-flex items-center">
                <svg
                  aria-hidden="true"
                  className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                View all
              </div>
            </a>
          </div>

          <button
            type="button"
            data-dropdown-toggle="apps-dropdown"
            className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
          </button>

          <div
            className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
            id="apps-dropdown"
          >
            <div
              className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300"
            >
              Apps
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">Sales</div>
              </a>
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">Users</div>
              </a>
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">Inbox</div>
              </a>
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">
                  Profile
                </div>
              </a>
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">
                  Settings
                </div>
              </a>
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">
                  Products
                </div>
              </a>
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">
                  Pricing
                </div>
              </a>
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">
                  Billing
                </div>
              </a>
              <a
                href="#"
                className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
              >
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
                <div className="text-sm text-gray-900 dark:text-white">
                  Logout
                </div>
              </a>
            </div>
          </div>
          <button
            type="button"
            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              alt="user photo"
            />
          </button>

          <div
            className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
            id="dropdown"
          >
            <div className="py-3 px-4">
              <span
                className="block text-sm font-semibold text-gray-900 dark:text-white"
              >Neil Sims</span
              >
              <span
                className="block text-sm text-gray-900 truncate dark:text-white"
              >name@flowbite.com</span
              >
            </div>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="/profile"
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >My profile</a
                >
              </li>
            </ul>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="https://github.com"
                  className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <FontAwesomeIcon icon="code-merge"/> Github</a
                >
              </li>
              <li>
                <a
                  href="https://meteor.com/"
                  target="_blank"
                  className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="flex items-center">
                    <FontAwesomeIcon icon="meteor"/>
                    Meteor.js
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://flowbite.com/"
                  target="_blank"
                  className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="flex items-center">
                    <FontAwesomeIcon icon="pen-ruler"/>
                    Flowbite Pro
                  </span>
                </a>
              </li>
            </ul>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="/logout"
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
