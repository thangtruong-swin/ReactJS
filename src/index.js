import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import App from './App';
import Invoices from './invoices';
import Expenses from './expenses';
import Invoice from './invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />}>
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }} className="container">
            <p>There's nothing here!</p>
          </main>
        }
    />
    </Routes>
  </BrowserRouter>
);


