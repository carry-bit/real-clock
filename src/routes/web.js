const home = {
    method: "get",
    url: '/',
    _: (req, res) => {
        res.send("Home");
    }
};

exports.getRoutes = [
    home
];