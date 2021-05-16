const http = require('http');

class Server {
    constructor(port, app) {
        this._app = app;
        this._port = port;
        this._server = http.createServer(this._app.getApp());
    }

    start = () => {
        this._server.listen(
            this._port,
            () => console.log(`Server is running on: ${this._port}`)
        );
    };
}

module.exports = Server;