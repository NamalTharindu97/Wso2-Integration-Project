const express = require("express");
const router = express.Router();
const { getProducts } = require("../controller/controller");

router.get("/products", getProducts);

module.exports = router;
