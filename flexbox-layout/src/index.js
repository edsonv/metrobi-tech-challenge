import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Layout';
import './assets/scss/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
