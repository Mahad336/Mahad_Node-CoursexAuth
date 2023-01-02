const { json } = require("express");
const Smoothie = require("../models/smoothie");

module.exports.createSmoothie_get = (req, res) => {
  res.render("createSmoothie", { url: req.url });
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

module.exports.allRecipes = (req, res) => {
  Smoothie.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("allRecipes", { smoothies: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.myRecipes = (req, res) => {
  Smoothie.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("myRecipes", { smoothies: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.smoothie_details = (req, res) => {
  const id = req.params.id;
  Smoothie.findById(id)
    .then((result) => {
      res.render("details", { blog: result, createdBy: req.createdBy });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.smoothie_delete = (req, res) => {
  const id = req.params.id;
  Smoothie.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/allRecipes" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.smoothie_edit = async (req, res) => {
  const id = req.params.id;
  let rslt = await Smoothie.findById(id);

  res.render("createSmoothie", {
    url: req.url,
    body: rslt,
  });
};
module.exports.smoothie_edit_put = (req, res) => {
  const id = req.params.id;
  Smoothie.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.json({ redirect: "/allRecipes" });
    })
    .catch((err) => {
      console.log(err);
    });
};
