const home = (req, res) => {
  res.send(`<div style="font-family:Arial;text-align:center;margin-top:20vh;">
    <h1 style="color:royalblue;font-size:64px;margin:0;">Matthew Knorr!</h1>
    <h2 style="color:#555;font-weight:normal;">Software Development</h2>
    <h3><a href="./week01" style="color:#555;text-decoration:none;font-weight:500;border-bottom:2px solid royalblue;padding-bottom:3px;">Week 01</a></h3>
  </div>`);
};

const week01 = (req, res) => {
  res.send(`<div style="font-family:Arial;text-align:center;margin-top:20vh;">
    <h1 style="color:royalblue;font-size:64px;margin:0;">Week 01!</h1>
    <h2> <a href="https://youtu.be/pUc5d4er6Fo" 
    style="color:#555;text-decoration:none;font-weight:500;border-bottom:2px solid royalblue;padding-bottom:3px;"> Video Submission </a></h2>
  </div>`);
}


module.exports = {
  home,
  week01
};  