const products = require("../models/products");

const getProducts = async (req, res) => {
  try {
    const data = await products.find();
    return res.status(200).send({ data: data });
  } catch (error) {
    res.status(404);
  }
};

module.exports = { getProducts };
