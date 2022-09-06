const express = require('express');
const ProductsService = require("../services/product.service")

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("Im a filter");
})

router.get("/:id", (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;
  const product = service.findOne(id);
  if (product) {
    res.json({
      message: "Product found !",
      product
    });
  } else {
    res.status(404).json({
      message: "Error. Product not found"
    })
  }

})

router.post("/", (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    message: "Created",
    newProduct
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params
  const body = req.body;
  const product = service.update(id, body);
  res.json({
    message: "Product modified",
    product
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params
  const response = service.delete(id);
  res.json({
    response
  });
});

module.exports = router;
