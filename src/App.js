const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


class App {
    constructor(db) {
        this._db = db;
        this._app = express();
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));
        this._app.use(bodyParser.json({limit: '50mb'}));
        this._app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        this._app.use(this.headerCors);

        this._app.post('/userInfo', this.submitUser);
        this._app.get('/get-history-signals', this.getHistory);
    }

    headerCors = (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        next();
    }

    getHistory = (req, res) => {
        const history = require('../../history.json');

        res.json(history);
        res.end();
    }

    submitUser = (req, res) => {
        try {
            this._db.addUserToDb(req.body);

            res.status(200);
        } catch (e) {
            console.log('submitUser', e)
        }

        res.end();
    };

    getApp = () => this._app;
}

module.exports = App;
