const nock = require('nock');

/**
 *
 * without nock.back, just point out the response this way
 * this is not needed with nock back
 *
 * @returns {nock.Scope}
 */
const loadBookingLoadNockInterceptors = () => {
    const scope = nock('http://appserverdemo-env.eba-mpdm2ns3.us-west-1.elasticbeanstalk.com/', {allowUnmocked: false})
        .get('/bookings/current')
        .replyWithFile(200,'./cypress/fixtures/booking.json');
    return scope;
}

module.exports = {
    loadBookingLoadNockInterceptors
}
