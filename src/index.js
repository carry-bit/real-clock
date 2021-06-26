const app = require('express')();

// create http server instead of using
// builtin express.js server
const http = require('http');
const httpServer = http.createServer(app);

// create socket.io instance and connect
// socket.io server to httpServer
const socketIO = require('socket.io');
const io = new socketIO.Server(httpServer);

const serverDetail = {
    port: 3000,
    host: 'localhost'
}

// helpers loading
const helper = require('./helper/index');

// define routes in routes/web.js file
// they will loaded here
const routes = require('./routes/web');

// combine routes to the server
helper.combineRoutes(app, routes.getRoutes);

httpServer.listen(serverDetail.port, serverDetail.host, () => {
    console.log("Listening on http://%s:%s", serverDetail.host, serverDetail.port);
})