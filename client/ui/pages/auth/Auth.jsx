import React, {useEffect, useState} from 'react';
import {RequestToken} from "./passwordless/RequestToken.jsx";
import {EnterToken} from "./passwordless/EnterToken.jsx";
import {AuthToken} from "./passwordless/AuthToken.jsx";
import {AuthPassword} from "./password/AuthPassword.jsx";

export const Auth = () => {
  const isPasswordless = false;

  if (isPasswordless) {
    return (<AuthToken/>);
  }

  return (<AuthPassword/>);
};
