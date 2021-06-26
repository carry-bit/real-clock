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
const routes = require('./routes/web');

// define io events in events/io.js file
const ioEvents = require('./events/io');

// combine routes to the server
helper.combineRoutes(app, routes.getRoutes);

// combine all io events
helper.combineSocketIOEvents(io, ioEvents.getEvents)

httpServer.listen(serverDetail.port, serverDetail.host, () => {
    console.log("-----------------\nListening on http://%s:%s", serverDetail.host, serverDetail.port);
})