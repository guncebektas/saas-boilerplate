import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ROUTE} from "./enums/route.js";
import {Hello} from "../ui/pages/Hello.jsx";
import {Info} from "../ui/pages/Info.jsx";
import {Profile} from "../ui/pages/profile/Profile.jsx";
import {Price} from "../ui/pages/price/Price.jsx";

export const Router = () => (
  <Routes>
    <Route path={ROUTE.HOME} element={<Hello/>}/>
    <Route path={ROUTE.DOCS} element={<Info/>}/>
    <Route path={ROUTE.PRICE} element={<Price/>}/>
    <Route path={ROUTE.PROFILE} element={<Profile/>}/>
  </Routes>
);
