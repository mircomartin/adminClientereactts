import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { ClientsProvider } from "./context";
import { router } from './routes/index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ClientsProvider>
      <RouterProvider router={ router }/>
    </ClientsProvider>
  </React.StrictMode>,
)
