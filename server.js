// express web server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<b style="color:royalblue;">Matthew Knorr!</b>');
});

const port = 3000;
app.listen(port, () => {
    console.log('Web Server is running at port ' + port);
});