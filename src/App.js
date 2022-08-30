import './App.css';
import React, {useEffect, useState} from 'react';
import {Navigate} from "react-router-dom";
import RoutePath from "./constants/RoutePath";

function App() {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticatedUser");
        if (loggedInUser) {
            setAuthenticatedUser(loggedInUser);
        }
    }, []);
    if (!authenticatedUser) {
        return <Navigate replace to={RoutePath.signIn}/>;
    } else {
        return <Navigate replace to={RoutePath.dashboard}/>;
    }
}

export default App;
