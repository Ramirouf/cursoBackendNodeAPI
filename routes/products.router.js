//const { response } = require('express');
const express = require('express');
const ProductsService = require("../services/product.service")

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("Im a filter");
})

router.get("/:id", async (req, res, next) => {
  try {
    //const id = req.params.id;
    const { id } = req.params;
    const product = await service.findOne(id);
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
  } catch (error) {
    next(error)
  }


})

router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: "Created",
    newProduct
  });
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: "Product modified",
      product
    });
  } catch (error) {
    next(error);
  }

});

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  const response = await service.delete(id);
  res.json({
    response
  });
});

module.exports = router;
