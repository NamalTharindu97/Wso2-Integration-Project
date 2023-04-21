const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const apiRotes = require("./routes/apiRoutes");

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());
app.use("/api", apiRotes);

app.listen(port, () => {
  console.log(`server one started in port ${port}`);
});
