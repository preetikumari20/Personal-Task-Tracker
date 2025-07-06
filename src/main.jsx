import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ use HashRouter
import App from './App.jsx';
import './styles/App.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
