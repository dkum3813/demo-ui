const {proxyServer} = require("./proxyServer");
const nock = require("nock");


nock.back.fixtures = './cypress/fixtures/'
// nock.back.setMode('record')  // except using here we can use env variable
                                // like this> export NOCK_BACK_MODE=record

proxyServer(8081)

