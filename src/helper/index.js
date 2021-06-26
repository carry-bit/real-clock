const combineRoutes = (expressServer, routes, _debugger = false) => {
    routes.map(route => {
        switch (route.method) {
            case "get":
                expressServer.get(route.url, route._);
                break;

            case "post":
                expressServer.post(route.url, route._);
                break;

            default:
                console.error("Not recognized method : %s", route.method);
        }

        if (_debugger)
            console.log("Route : [%s, %s]", route.method, route.url)
    })
}

const combineSocketIOEvents = (socketIOServer, events, _debugger = false) => {
    events.map(event => {
        socketIOServer.on(event.event, event._);

        if (_debugger)
            console.log("IO Event : Listening on `%s` event.", event.event);
    });
}

exports.combineRoutes = combineRoutes;
exports.combineSocketIOEvents = combineSocketIOEvents;