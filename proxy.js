const {proxyServer} = require("./proxyServer");
const nock = require("nock");


nock.back.fixtures = './cypress/fixtures/'
nock.back.setMode('record')

proxyServer(8081)

