const request = require("request");
const nock = require('nock')
// const {proxyServer} = require("./proxyServer");
// const {loadBookingLoadNockInterceptors} = require("./stub/booking.stub");
// const http = require("http");

// const nockBack = nock.back
// nockBack.fixtures = './../fixtures/'

describe("booking confirmation page", () => {
    beforeEach(() => {
        // stubCurrentBooking()
        cy.visit('http://localhost:3000/bookingConfirmation')
    })

    // nockBack('currentBooking.json', nockDone => {
    //     request.get('http://appserverdemo-env.eba-mpdm2ns3.us-west-1.elasticbeanstalk.com/bookings/current', (err, res, body) => {
    //         nockDone()
    //         nockBack('currentBooking.json', function (nockDone) {
    //             it('should load booked user name', async () => {
    //                 cy.get('input[id="firstName"]').should("have.value", "John3")
    //             });
    //             nockDone() //never gets here
    //         })
    //     })
    // })

    it('should load booked user name', async () => {
        cy.get('input[id="firstName"]').should("have.value", "John3")
    });
})
