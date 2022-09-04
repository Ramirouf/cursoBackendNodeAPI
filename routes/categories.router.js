const express = require("express");
const router = express.Router();

router.get("/categories/:catID/products/:prodID", (req, res) => {
  const { catID, prodID } = req.params;
  res.json({
    catID,
    prodID,
    /*name: "Product !",
    price: 2000,*/
  });
})

module.exports = router;
