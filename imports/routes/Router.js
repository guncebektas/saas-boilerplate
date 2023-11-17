import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Hello} from "../ui/pages/Hello.jsx";
import {Info} from "../ui/pages/Info.jsx";
import {ROUTE} from "./enums/route.js";

export const Router = () => (
  <Routes>
    <Route path={ROUTE.HOME} element={<Hello/>}/>
    <Route path={ROUTE.PROFILE} element={<Info/>}/>
    <Route path={ROUTE.LOGIN} element={<Info/>}/>
    <Route path={ROUTE.DOCS} element={<Info/>}/>
  </Routes>
);
