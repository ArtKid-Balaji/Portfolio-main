import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* The basename must match your repo name exactly */}
    <BrowserRouter basename="/Portfolio-main">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
