//const { application } = require('express');
const express = require('express');
const routerApi = require("./routes");

const { logErrors, errorHandler } = require("./middlewares/error.handler");

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello from express server");
});

app.get('/new-route', (req, res) => {
  res.send("Hello from new route");
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  //console.log("Listening on port " + port);
});
