import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Flowbite} from "flowbite-react";
import {ConditionalLayout} from "./layouts/ConditionalLayout.jsx";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";
import {faCheck, faCodeMerge, faCoffee, faMeteor, faPenRuler} from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(faCheck, faCoffee, faCodeMerge, faMeteor, faPenRuler);

export function App() {
  return (
    <Flowbite>
      <BrowserRouter>
        <div className="antialiased bg-indigo-50 dark:bg-gray-800">
          <div className="min-h-screen mx-auto">
            <ConditionalLayout/>
          </div>
        </div>
      </BrowserRouter>
    </Flowbite>
  );
}
