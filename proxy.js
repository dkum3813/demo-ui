const nock = require('nock')
const {proxyServer} = require("./proxyServer");
const {loadBookingLoadNockInterceptors} = require("./cypress/stub/booking.stub");
// const request = require("request");
// const http = require("http");

// const nockBack = nock.back
//
// nockBack.fixtures = './cypress/fixtures/'
// nockBack.setMode('record')

proxyServer(8081)

let bookingLoadNockScope = loadBookingLoadNockInterceptors();
bookingLoadNockScope.persist()

// nockBack('currentBooking.json', nockDone => {
//     request.get('http://appserverdemo-env.eba-mpdm2ns3.us-west-1.elasticbeanstalk.com/bookings/current', (err, res, body) => {
//         console.log(body)
//         nockDone()
//         // nockBack('currentBooking.json', function (nockDone) {
//         //     http.get('http://appserverdemo-env.eba-mpdm2ns3.us-west-1.elasticbeanstalk.com/bookings/current').end() // respond body "Ok"
//         //     nockDone() //never gets here
//         // })
//     })
// })


