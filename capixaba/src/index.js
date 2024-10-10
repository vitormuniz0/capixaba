import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Globalstyles from './styleglobal'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Globalstyles/>
    <App />
  </React.StrictMode>
);

