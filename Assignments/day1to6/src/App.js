import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BodyComponent from './Components/BodyComponent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorComponent from '../src/Components/ErrorComponent';
import CardComponentDetail from '../src/Components/CardComponentDetail';

const router = createBrowserRouter([

    {path: "/", element: <BodyComponent/>, errorElement: <ErrorComponent/>},
    {path: "/user/:id", element: <CardComponentDetail/>}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// root.render(<BodyComponent/>);