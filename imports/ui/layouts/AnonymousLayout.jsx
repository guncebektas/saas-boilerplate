import React from 'react';
import {ConditionalLayout} from './ConditionalLayout';

export const AnonymousLayout = ({ children }) => (
  <ConditionalLayout>{children}</ConditionalLayout>
);
