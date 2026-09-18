const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');


app.get('/', lesson1Controller.routeOne);

app.get('/routeTwo', lesson1Controller.routeTwo);


const port = 3000;
app.listen(port, () => {
    console.log('Web Server is running at port ' + port);
});