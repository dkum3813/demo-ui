import './BookingConfirmation.css'
import {useEffect, useState} from "react";

function BookingConfirmation() {

    const [booking, setBooking] = useState({});

    const fetchCurrentBooking = () => {
        fetch("http://appserverdemo-env.eba-mpdm2ns3.us-west-1.elasticbeanstalk.com/bookings/current")
            .then(response => response.json())
            .then(data => setBooking(data))
    }

    useEffect(() => {
        fetchCurrentBooking();
    }, [])

    const handleFormChange = (event) => {
        event.stopPropagation();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name, " = ", value);
    }

    //

    function renderBookingItems() {
        if (booking && booking.bookingItems) {
            const itms = booking.bookingItems.map(bookingItem => {
                return <li key={bookingItem.id} className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">{bookingItem.name}</h6>
                        <small className="text-muted">U= {bookingItem.quantity} (UP={bookingItem.unitPrice})</small>
                    </div>
                    <span className="text-muted">Rs {bookingItem.price}</span>
                </li>
            });

            return (
                <ul className="list-group mb-3">
                    {itms}
                    <li key="disc" className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Discount</h6>
                            <small>All items</small>
                        </div>
                        <span className="text-success">- Rs {booking ? booking.discount : 0}</span>
                    </li>
                    <li key="tota" className="list-group-item d-flex justify-content-between">
                        <span>Total (Rs)</span>
                        <strong>Rs {booking ? booking.totalPrice : 0}</strong>
                    </li>
                </ul>
            )
        } else {
            return <li>Nothing</li>
        }
    }

    return (
        <div className="container">
            <div className="py-5 text-center">
                <img
                    className="d-block mx-auto mb-4"
                    src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                    alt=""
                    width="72"
                    height="72"/>
                <h2>Confirm Booking</h2>
                <p className="lead">Please confirm your booking information for proceed into payment.</p>
            </div>

            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">{booking.bookingItems ? booking.bookingItems.length : 0}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {renderBookingItems()}
                    </ul>

                    <div className="card p-2">
                        <div className="input-group">
                            <input
                                onChange={handleFormChange}
                                type="text"
                                value=""
                                className="form-control"
                                placeholder="Promo code"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <div className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    onChange={handleFormChange}
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder=""
                                    value={booking.user ? booking.user.firstName : ''}
                                    required/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    onChange={handleFormChange}
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder=""
                                    value={booking.user ? booking.user.lastName : ''}
                                    required/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input
                                    onChange={handleFormChange}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={booking.user ? booking.user.userName : ''}
                                    required/>
                                <div className="invalid-feedback" style={{width: '100%'}}>
                                    Your username is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                            <input
                                onChange={handleFormChange}
                                type="email"
                                className="form-control"
                                id="email"
                                value={booking.user ? booking.user.email : ''}
                                placeholder="you@example.com"/>
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input
                                onChange={handleFormChange}
                                type="text"
                                className="form-control"
                                id="address"
                                value={booking.user ? booking.user.address : ''}
                                placeholder="1234 Main St"
                                required/>
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input
                                onChange={handleFormChange}
                                type="text"
                                className="form-control"
                                id="address2"
                                placeholder="Apartment or suite"/>
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <select
                                    onChange={handleFormChange}
                                    className="custom-select d-block w-100"
                                    id="country"
                                    required
                                    value={booking.user ? booking.user.country : ""}>
                                    <option value="">Choose...</option>
                                    <option>Sri Lanka</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <select
                                    onChange={handleFormChange}
                                    className="custom-select d-block w-100"
                                    id="state"
                                    required
                                    value={booking.user ? booking.user.city : ""}>
                                    <option value="">Choose...</option>
                                    <option>Colombo</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input
                                    onChange={handleFormChange}
                                    type="text"
                                    className="form-control"
                                    id="zip"
                                    placeholder=""
                                    required/>
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4"></hr>
                    </div>
                </div>
            </div>
            <button
                className="btn btn-primary btn-lg btn-block"
                type="submit">Continue to checkout
            </button>
        </div>
    );
}

export default BookingConfirmation;
