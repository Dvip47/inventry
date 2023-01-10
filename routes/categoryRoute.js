const express = require("express");
const router = express.Router();
const { addCategory,getCategory } = require("../controllers/categoryController");

const protect = require("../middleware/authMiddleware");
router.post("/addcategory",addCategory);
router.get("/allcategory",getCategory);
module.exports = router;