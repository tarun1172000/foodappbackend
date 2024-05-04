const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;
app.use(cors());

app.use(express.json());

const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");

mongoose
  .connect("mongodb://127.0.0.1:27017/trymongo")
  .then(() => console.log("connected mongo"));

app.use("/api", product);
// app.use("/api", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
