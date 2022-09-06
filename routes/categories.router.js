const express = require("express");
const CategoriesService = require("../services/categories.service")

const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  if (category) {
    res.status(200).json({
      message: "Category found !",
      category
    });
  } else {
    res.status(404).json({
      message: "Error. Category not found",
    })
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Category created !",
    data: body
  })
});

module.exports = router;
