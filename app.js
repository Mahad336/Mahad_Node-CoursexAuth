const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const smoothieRoutes = require("./routes/smoothieRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://Mahad:Admin123@nodeauthmahad.idmutl2.mongodb.net/node-auth-tutorial";
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, {
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000);
    console.log("connected");
  })
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);
app.use(smoothieRoutes);
