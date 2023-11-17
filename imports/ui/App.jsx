import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Router} from '../routes/Router';
import {Flowbite} from "flowbite-react";
import {Header} from "./components/header/Header.jsx";
import {Nav} from "./components/nav/Nav.jsx";
import {ConditionalLayout} from "./layouts/ConditionalLayout.jsx";

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
      <BrowserRouter>
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
          <div className="min-h-screen mx-auto">
            <ConditionalLayout/>
          </div>
        </div>
      </BrowserRouter>
    </Flowbite>
  );
}
