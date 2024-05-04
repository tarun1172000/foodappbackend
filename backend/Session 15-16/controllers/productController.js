const DishesModel = require("../models/Dishes");

const getProducts = (req, res) => {
  // DB queries, checking some conditions, filtering
  // logic

  const dishes = DishesModel.find()
    .then((items) => {
      console.log(items);
      return res.send(items);
    })
    .catch((err) => {
      console.log(err);
      return res.send([]);
    });
};

const getSingleProduct = (req, res) => {
  // DB queries, checking some conditions, filtering
  // logic

  console.log(req.params.id);
  const id = req.params.id;

  // from the db, find the product which has id = id and return or send that in
  // the response
  res.send([
    {
      id: 1,
      title: "dummy",
      price: "...",
      category: "...",
      description: "...",
      image: "...",
    },
  ]);
};

const getCategories = (req, res) => {
  // this comes from a DB
  res.send([
    {
      id: 1,
      title: "Clothing",
    },
    {
      id: 30,
      title: "Jewellery",
    },
  ]);
};

const postCategories = (req, res) => {
  const categoryName = req.body.categoryName;
  console.log(categoryName);
  // Insert this categoryName in the database;

  res.send("OK");
};

module.exports = {
  getProducts,
  getSingleProduct,
  getCategories,
  postCategories,
};
