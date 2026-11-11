import React from 'react';
import ReactDOM from 'react-dom/client';
import Lab4Demo from './Lab4Demo'; // <-- On le cherche direct dans le même dossier
import './styles/theme.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Lab4Demo />
  </React.StrictMode>
);