import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Importe o CSS global aqui
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
