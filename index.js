const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello from express server");
});

app.get('/new-route', (req, res) => {
  res.send("Hello from new route");
});

app.get('/products', (req, res) => {
  res.json({
    name: "Product 1",
    price: 999
  });
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
