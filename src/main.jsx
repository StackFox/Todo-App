import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Pricing from './components/Pricing';
import Features from './components/Featuress';
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <></> }, // Home route, NewTodo is rendered by Layout
      { path: 'features', element: <Features /> },
      { path: 'pricing', element: <Pricing /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
