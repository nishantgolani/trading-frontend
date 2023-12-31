// index.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <Router>
    <App />
  </Router>
);
