const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.get("/signup", authController.signup);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout);

module.exports = router;
