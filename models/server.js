const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.port = process.env.PORT;
        this.dbConnection();
        this.routes();

    }

    async dbConnection() {
        await dbConnection();
    }

    middlewares() {
        // * config cors
        this.app.use(cors());
        // config body parser
        this.app.use(express.json());
        this.app.use("/api/wallet", require("../routes/fleet"));
    }

    routes() {
    }


    listen() {
        this.app.listen(
            this.port, () => {
                console.log('Server is running on port ' + this.port);
            });
    }
}


module.exports = Server;


