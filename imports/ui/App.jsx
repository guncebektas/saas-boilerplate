import React, {useEffect} from 'react';
import {Hello} from './Hello.jsx';
import {Info} from './Info.jsx';
import {DarkThemeToggle, Flowbite} from "flowbite-react";
import {Header} from "./components/header/Header.jsx";
import {Nav} from "./components/nav/Nav.jsx";

export function App() {
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
    <Flowbite>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <div className="min-h-screen mx-auto">
          <section className="bg-white dark:bg-gray-900">
            <button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>

            <Header/>

            <Nav />

            <main className="p-4 md:ml-64 h-auto pt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="h-64 md:h-64">
                  <Hello/>
                </div>
                <div className="h-64 md:h-64">
                  <Info/>
                </div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">

                </div>
                <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">

                </div>
              </div>
              <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">

              </div>
            </main>
          </section>
        </div>
      </div>
    </Flowbite>
  );
}
