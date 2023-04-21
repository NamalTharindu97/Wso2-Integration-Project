const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const Customer = require("./Customer");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.dbURI);
    console.log(
      "mongoDB connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
dbConnection();
app.use(express.json());
app.use(cors());

app.get("/customers", async (req, res) => {
  try {
    const data = await Customer.find();
    return res.status(200).send({ data: data });
  } catch (error) {
    res.status(404);
  }
});

app.listen(8001, () => {
  console.log("server start 8001");
});
