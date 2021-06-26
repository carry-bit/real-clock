const onConnection = {
    event: 'connection',
    _: () => {
        console.log("new user connected to the server!");
    }
}

exports.getEvents = [
    onConnection
]