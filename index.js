//const { application } = require('express');
const express = require('express');
const faker = require("faker");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello from express server");
});

app.get('/new-route', (req, res) => {
  res.send("Hello from new route");
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});
app.get("/products/filter", (req, res) => {
  res.send("Im a filter");
})
app.get("/products/:id", (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;
  res.json({
    id,
    name: "Product 2",
    price: 2000
  });
})



app.get("/users", (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No params !");
  }
});

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
  //console.log("Listening on port " + port);
});
