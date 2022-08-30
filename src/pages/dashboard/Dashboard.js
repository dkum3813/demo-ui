// import React, {useEffect, useState} from 'react'
// import {Navigate} from 'react-router-dom'
import './Dashboard.css'
import RoutePath from "../../constants/RoutePath";
import {Link} from "react-router-dom";

// import RoutePath from "../../constants/RoutePath";

function Dashboard() {
    return (
        <div>
            <p>Welcome to your Dashboard</p>
            <Link className="btn btn-secondary" to={RoutePath.bookingConfirmation}>Load Latest Booking</Link>
        </div>
    );
    // const [authenticatedUser, setAuthenticatedUser] = useState(null);
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("authenticatedUser");
    //     if (loggedInUser) {
    //         setAuthenticatedUser(loggedInUser);
    //     }
    // }, []);
    // if (!authenticatedUser) {
    //     return <Navigate replace to={RoutePath.signIn}/>;
    // } else {
    //     return (
    //         <div>
    //             <p>Welcome to your Dashboard</p>
    //         </div>
    //     );
    // }
}

export default Dashboard;
