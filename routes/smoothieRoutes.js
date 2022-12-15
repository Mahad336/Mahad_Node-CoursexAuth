const express = require("express");
const smoothieController = require("../controllers/smoothieController");

const srouter = express.Router();

srouter.get("/createSmoothie", smoothieController.createSmoothie_get);
srouter.get("/allRecipes", smoothieController.allRecipes_get);
srouter.get("/myRecipes", smoothieController.myRecipes_get);
srouter.post("/createSmoothie", smoothieController.createSmoothie_post);

module.exports = srouter;
