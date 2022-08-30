const fetch = require('node-fetch');

const throwNon200 = response => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
};

const getCurrentBooking = () =>
    fetch('http://localhost:8080/bookings/current')
        .then(throwNon200)
        .then(res => res.json())
        .catch(e => console.log('Error getting current booking: ', e.message));


module.exports = {
    getCurrentBooking
}
