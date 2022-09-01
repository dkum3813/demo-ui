# Dummy test project for Cypress with Nock

## Run React App
#### Install dependencies
`$ yarn install`

#### Start web app
`$ yarn start`

This will start the web app in localhost:3000

## Run Proxy Server
#### Setup nock mode
`$ export NOCK_BACK_MODE=record`

#### Run the proxy server
`$ node proxy.js`

This will start the proxy server in 8081 port

## Run Cypress Tests in UI
#### Export proxy server environment variable
`$ export HTTP_PROXY=http://localhost:8081`

#### Run cypress
`$ cypress open`

Cypress will run the browser with proxy enabled for `http://localhost:8081`
