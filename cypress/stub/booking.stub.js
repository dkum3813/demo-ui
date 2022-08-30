const nock = require('nock');

// const loadBookingLoadNockInterceptors = () => {
//     const scope = nock('http://appserverdemo-env.eba-mpdm2ns3.us-west-1.elasticbeanstalk.com/', {allowUnmocked: false})
//         .get('/bookings/current')
//         .reply(200, {
//                 "id": 1000,
//                 "user": {
//                     "firstName": "John3",
//                     "lastName": "Martin",
//                     "email": "john.martin@xygmailtest.com",
//                     "userName": "john1212",
//                     "address": "123/Y, Darly Road, Colombo",
//                     "country": "Sri Lanka",
//                     "city": "Colombo"
//                 },
//                 "bookingItems": [{
//                     "id": 10000,
//                     "name": "Redbull",
//                     "unitPrice": 500.0,
//                     "quantity": 8,
//                     "price": 4000.0,
//                     "discount": 0.0
//                 },
//                     {
//                         "id": 10001,
//                         "name": "Milo",
//                         "unitPrice": 90.0,
//                         "quantity": 2,
//                         "price": 180.0,
//                         "discount": 0.0
//                     },
//                     {
//                         "id": 10002,
//                         "name": "CocaCola",
//                         "unitPrice": 300.0,
//                         "quantity": 7,
//                         "price": 2100.0,
//                         "discount": 350.0
//                     },
//                     {
//                         "id": 10004,
//                         "name": "Hand Wash",
//                         "unitPrice": 1600.0,
//                         "quantity": 4,
//                         "price": 6400.0,
//                         "discount": 0.0
//                     },
//                     {
//                         "id": 10005,
//                         "name": "GT Spice",
//                         "unitPrice": 800.0,
//                         "quantity": 5,
//                         "price": 4000.0,
//                         "discount": 0.0
//                     }
//                 ],
//                 "totalPrice": 16680.0,
//                 "discount": 350.0,
//                 "finalPrice": 16330.0,
//                 "loadedTime": "2022-08-28 23:42:09"
//             }
//         );
//     return scope;
// }


const loadBookingLoadNockInterceptors = () => {
    const scope = nock('http://appserverdemo-env.eba-mpdm2ns3.us-west-1.elasticbeanstalk.com/', {allowUnmocked: false})
        .get('/bookings/current')
        .replyWithFile(200,'./cypress/fixtures/booking.json');
    return scope;
}

module.exports = {
    loadBookingLoadNockInterceptors
}
