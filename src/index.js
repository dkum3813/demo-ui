import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/sign-in/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import RoutePath from "./constants/RoutePath";
import BookingConfirmation from "./pages/booking/BookingConfirmation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path={RoutePath.signIn} element={<SignIn/>}/>
                <Route path={RoutePath.dashboard} element={<Dashboard/>}/>
                <Route path={RoutePath.bookingConfirmation} element={<BookingConfirmation/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
