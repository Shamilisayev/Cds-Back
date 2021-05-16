const App = require('./App');
const Server = require('./Server');
const Model = require('./model/Model');
const { createFile } = require('./utils/createFile');

function init() {
    const port = 3002 || process.env.PORT;
    const db = new Model(createFile);
    const app = new App(db);
    const server = new Server(port, app);

    server.start();
}

init();
