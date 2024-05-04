const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5003;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const product = require("./routes/productRounts");

mongoose
.connect("mongodb+srv://tarunwaliya780:edHSKlknXnGwEJsi@cluster0.mivxgin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("connected mongo"));
app.use("/api", product);
app.listen(port, () => {
  console.log(`Example app listening on port tarun ${port}`);
});
