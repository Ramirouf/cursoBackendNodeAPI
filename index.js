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
  res.json([
    {
      name: "Product 1",
      price: 1000
    },
    {
      name: "Product 2",
      price: 2000
    }
  ]);
});

app.get("/products/:id", (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;
  res.json({
    id,
    name: "Product 2",
    price: 2000
  });
})

app.get("/categories/:catID/products/:prodID", (req, res) => {
  const { catID, prodID } = req.params;
  res.json({
    catID,
    prodID,
    /*name: "Product !",
    price: 2000,*/
  });
})

app.listen(port, () => {
  console.log("Listening on port " + port);
});
