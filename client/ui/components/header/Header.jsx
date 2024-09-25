import React, {useEffect} from "react";
import {DarkThemeToggle} from "flowbite-react";
import {HeaderLogo} from "./HeaderLogo.jsx";
import {HeaderSearch} from "./HeaderSearch.jsx";
import {HeaderToggleButton} from "./HeaderToggleButton.jsx";
import {HeaderNotifications} from "./HeaderNotifications.jsx";
import {HeaderOrganization} from "./HeaderOrganization.jsx";
import {HeaderProfile} from "./HeaderProfile.jsx";
import {LanguageSelector} from "../languageSelector/LanguageSelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {isSearchEnabled} from "../../../../imports/modules/shared/functions/isSearchEnabled";

export const Header = () => {

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
      // Create a click event
      const clickEvent = new MouseEvent('click', {bubbles: true, cancelable: true, view: window});

      const buttonElement = document.querySelector('button[aria-label*="Toggle dark mode"]');
      buttonElement.dispatchEvent(clickEvent);
    } else {
      document.querySelector('html').classList.remove('dark');
    }

    // Function to be executed when you change the "dark" class in the HTML tag
    const handleDarkModeChange = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const htmlElement = document.querySelector('html');
          if (htmlElement.classList.contains('dark')) {
            // The "dark" class has been added
            localStorage.setItem('theme', 'dark');
          } else {
            // The "dark" class has been removed
            localStorage.setItem('theme', 'light');
          }
        }
      }
    };

    // Create a new MutationObserver
    const htmlElement = document.querySelector('html');
    const observer = new MutationObserver(handleDarkModeChange);

    // Notice changes in the "dark" class of the HTML tag
    observer.observe(htmlElement, {attributes: true, attributeFilter: ['class']});

  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <HeaderToggleButton/>
          <HeaderLogo/>
          <HeaderSearch/>
        </div>
        <div className="flex items-center lg:order-2">
          {
            isSearchEnabled() ?
              (
                <button
                  type="button"
                  data-drawer-toggle="drawer-navigation"
                  aria-controls="drawer-navigation"
                  className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Toggle search</span>
                  <FontAwesomeIcon icon={faSearch}/>
                </button>
              ) : ''
          }


            <DarkThemeToggle/>

            <HeaderNotifications/>

            <HeaderOrganization/>

            <HeaderProfile/>

            <div className="header-dropdown-wrapper">
            <LanguageSelector/>
            </div>
            </div>
            </div>
            </nav>
            );
          };
