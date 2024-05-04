const DishesModel = require("../models/Dishes");

 const getProducts =(req,res)=>{

     const dishes = DishesModel.find()
     .then((items)=>{
        return res.send(items);
     })
     .catch((err)=>{
        console.log(err);
        return res.send([]);
     });
 };

 module.exports = {
    getProducts
  };