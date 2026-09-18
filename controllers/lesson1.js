const routeOne = (req, res) => {
  res.send(`<div style="font-family:Arial;text-align:center;margin-top:20vh;">
    <h1 style="color:royalblue;font-size:64px;margin:0;">Matthew Knorr!</h1>
    <h2 style="color:#555;font-weight:normal;">Software Development</h2>
  </div>`);
};

const routeTwo = (req, res) => {
  res.send(`<div style="font-family:Arial;text-align:center;margin-top:20vh;">
    <h1 style="color:royalblue;font-size:64px;margin:0;">Route Two!</h1>
  </div>`);
};

const routeThree = (req, res) => {
  res.send(`<div style="font-family:Arial;text-align:center;margin-top:20vh;">
    <h1 style="color:royalblue;font-size:64px;margin:0;">Route Three!</h1>
  </div>`);
}

module.exports = {
  routeOne,
  routeTwo,
  routeThree
};  