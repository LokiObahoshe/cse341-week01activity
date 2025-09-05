const normalRoute = (req, res) => {
    res.send('Hello World!!');
};

const rebeccaRoute = (req, res) => {
    res.send('Hello Rebecca!!');
};

const chandraRoute = (req, res) => {
    res.send('Hello Chandra!!');
};

module.exports = {
    normalRoute,
    rebeccaRoute,
    chandraRoute
}