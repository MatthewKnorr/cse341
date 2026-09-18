const routeOne = (req, res) => {
  res.send(`Route One`);
};

const routeTwo = (req, res) => {
  res.send(`Route Two`);
};

module.exports = {
  routeOne,
  routeTwo
};  