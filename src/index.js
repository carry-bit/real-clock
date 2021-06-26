const app = require('express')();

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

app.listen(serverDetail.port, serverDetail.host, () => {
    console.log("Listening on http://%s:%s", serverDetail.host, serverDetail.port);
})