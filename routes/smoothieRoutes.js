const express = require("express");
const smoothieController = require("../controllers/smoothieController");
const { requireAuth } = require("../middleware/authMiddleware");

const srouter = express.Router();

srouter.get("/createSmoothie", smoothieController.createSmoothie_get);
srouter.get("/allRecipes", requireAuth, smoothieController.allRecipes_get);
srouter.get("/myRecipes", smoothieController.myRecipes_get);
srouter.get("/allRecipes/:id", smoothieController.smoothie_details);
srouter.delete("/allRecipes/:id", smoothieController.smoothie_delete);
srouter.get("/allRecipes/:id/edit", smoothieController.smoothie_edit_get);
srouter.put("/allRecipes/:id/edit", smoothieController.smoothie_edit_put);
srouter.post("/createSmoothie", smoothieController.createSmoothie_post);

module.exports = srouter;
