# Dummy test project for Cypress with Nock


### Install dependencies
`$ yarn install`

### Start web app
`$ yarn start`

This will start the web app in localhost:3000

### Run the proxy server in another terminal
`$ node cypress/proxy.js`

This will start a proxy server in 8081 port

### Export proxy server environment variable
`$ export HTTP_PROXY=http://localhost:8081`

### Run cypress
`$ cypress open`

Cypress will run the browser with proxy enabled for `http://localhost:8081`
