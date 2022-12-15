const Smoothie = require("../models/smoothie");

module.exports.createSmoothie_get = (req, res) => {
  res.render("createSmoothie");
};

module.exports.createSmoothie_post = (req, res) => {
  const smoothie = new Smoothie(req.body);
  smoothie
    .save()
    .then((result) => {
      res.status(201).json(result);
      console.log("saved Successfuly");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.allRecipes_get = (req, res) => {
  Smoothie.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("allRecipes", { smoothies: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.myRecipes_get = (req, res) => {
  Smoothie.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("myRecipes", { smoothies: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
