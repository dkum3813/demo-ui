const http = require("http");
const axios = require("axios")

const proxyServer = (port) => {
    if (port === undefined || typeof port !== "number") {
        throw new Error("No port specified.")
    }
    const proxy = http
        .createServer(async (req, res) => {
            // Delete accept header due to nock conflict
            delete req.headers.accept
            let response
            try {
                response = await axios(req)
            } catch (error) {
                response = error.response
            }
            if (response) {
                let content = response.data;
                // If response is a JSON, turn it into a buffer
                if (typeof response.data === "object") {
                    content = JSON.stringify(content)
                }
                res.writeHead(response.status, response.headers)
                res.write(content)
            }
            res.end()
        })
        .listen(port)
    console.log(`proxy-server is running on port ${port}`)
    return proxy
}

module.exports = {
    proxyServer
}
